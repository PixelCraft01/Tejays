import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:http";
import dotenv from "dotenv";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { after, before, test } from "node:test";
import { fileURLToPath } from "node:url";
import { createApp, getSmtpConfig } from "./server.js";

const smtpEnv = {
  SMTP_HOST: "mail.tejays.in",
  SMTP_PORT: "465",
  SMTP_SECURE: "true",
  SMTP_USER: "no-reply@tejays.in",
  SMTP_PASS: "test-only-placeholder",
  MAIL_FROM: "no-reply@tejays.in",
  MAIL_TO: "sales@tejays.in",
};
const validSubmission = {
  name: "Test Customer",
  phone: "9876543210",
  email: "customer@example.com",
  city: "Mumbai",
  pincode: "400001",
  service: "Broadband",
  message: "Please contact me about service availability.",
};

let server;
let baseUrl;
let deliveredMessage;

before(async () => {
  const app = createApp({
    env: smtpEnv,
    rateLimitMax: 100,
    sendMail: async (message) => {
      deliveredMessage = message;
      return { accepted: [message.to] };
    },
  });
  server = createServer(app);
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  server.close();
  await once(server, "close");
});

test("SMTP defaults use the specified server, port, SSL mode, and mailboxes", () => {
  const config = getSmtpConfig({
    SMTP_PASS: "test-only-placeholder",
  });
  assert.equal(config.host, "mail.tejays.in");
  assert.equal(config.port, 465);
  assert.equal(config.secure, true);
  assert.equal(config.user, "no-reply@tejays.in");
  assert.equal(config.from, "no-reply@tejays.in");
  assert.equal(config.to, "sales@tejays.in");
});

test("SMTP configuration readiness requires a non-empty password and valid settings", () => {
  assert.equal(getSmtpConfig({ ...smtpEnv, SMTP_PASS: "" }).ready, false);
  assert.equal(getSmtpConfig({ ...smtpEnv, SMTP_PASS: "   " }).ready, false);
  assert.equal(getSmtpConfig(smtpEnv).ready, true);
  assert.equal(
    getSmtpConfig({
      ...smtpEnv,
      SMTP_PASS: dotenv.parse('SMTP_PASS="test-only#"\n').SMTP_PASS,
    }).ready,
    true,
  );
  assert.equal(getSmtpConfig({ ...smtpEnv, SMTP_PORT: "not-a-port" }).ready, false);
});

test("server loads root .env when started from outside the project", () => {
  const serverPath = resolve(dirname(fileURLToPath(import.meta.url)), "server.js");
  const script = `
    const { getSmtpConfig } = await import(${JSON.stringify(
      new URL(`file:///${serverPath.replaceAll("\\", "/")}`).href,
    )});
    console.log(JSON.stringify({
      host: getSmtpConfig(process.env).host,
      port: getSmtpConfig(process.env).port,
      secure: getSmtpConfig(process.env).secure
    }));
  `;
  const result = spawnSync(
    process.execPath,
    ["--input-type=module", "-e", script],
    {
      cwd: tmpdir(),
      env: {
        PATH: process.env.PATH,
        SystemRoot: process.env.SystemRoot,
      },
      encoding: "utf8",
    },
  );

  assert.equal(result.status, 0, "server should load root dotenv from another cwd");
  const settings = JSON.parse(result.stdout.trim().split(/\r?\n/).at(-1));
  assert.equal(settings.host, "mail.tejays.in");
  assert.equal(settings.port, 465);
  assert.equal(settings.secure, true);
});

test("health endpoint responds without exposing configuration", async () => {
  const response = await fetch(`${baseUrl}/api/health`);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    success: true,
    status: "ok",
    smtpConfigured: true,
  });
});

test("health endpoint reports missing SMTP configuration without exposing secrets", async () => {
  const app = createApp({ env: { ...smtpEnv, SMTP_PASS: "" } });
  const localServer = createServer(app);
  localServer.listen(0, "127.0.0.1");
  await once(localServer, "listening");
  const url = `http://127.0.0.1:${localServer.address().port}/api/health`;
  try {
    const response = await fetch(url);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), {
      success: true,
      status: "ok",
      smtpConfigured: false,
    });
  } finally {
    localServer.close();
    await once(localServer, "close");
  }
});

test("CORS permits only configured frontend origins", async () => {
  const app = createApp({
    env: { FRONTEND_ORIGINS: "http://localhost:5173" },
  });
  const localServer = createServer(app);
  localServer.listen(0, "127.0.0.1");
  await once(localServer, "listening");
  const url = `http://127.0.0.1:${localServer.address().port}/api/health`;
  try {
    const allowed = await fetch(url, {
      headers: { Origin: "http://localhost:5173" },
    });
    assert.equal(allowed.status, 200);
    assert.equal(
      allowed.headers.get("access-control-allow-origin"),
      "http://localhost:5173",
    );

    const denied = await fetch(url, {
      headers: { Origin: "http://attacker.example" },
    });
    assert.equal(denied.status, 403);
  } finally {
    localServer.close();
    await once(localServer, "close");
  }
});

test("contact endpoint rejects missing fields", async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Test Customer" }),
  });
  assert.equal(response.status, 400);
  assert.equal((await response.json()).success, false);
});

test("contact endpoint rejects malformed email addresses", async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...validSubmission, email: "not-an-email" }),
  });
  assert.equal(response.status, 400);
  assert.match((await response.json()).message, /email/i);
});

test("contact endpoint rejects excessively long message content", async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...validSubmission, message: "x".repeat(2001) }),
  });
  assert.equal(response.status, 400);
  assert.equal((await response.json()).success, false);
});

test("contact endpoint sends to the configured inbox with customer Reply-To", async () => {
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...validSubmission,
      to: "attacker@example.com",
      from: "attacker@example.com",
    }),
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    success: true,
    message: "Enquiry submitted successfully.",
  });
  assert.equal(deliveredMessage.from, "no-reply@tejays.in");
  assert.equal(deliveredMessage.to, "sales@tejays.in");
  assert.equal(deliveredMessage.replyTo, validSubmission.email);
  assert.match(deliveredMessage.text, /Please contact me about service availability\./);
});

test("contact endpoint does not report success when the recipient was not accepted", async () => {
  const app = createApp({
    env: smtpEnv,
    sendMail: async () => ({ accepted: [], rejected: ["sales@tejays.in"] }),
  });
  const localServer = createServer(app);
  localServer.listen(0, "127.0.0.1");
  await once(localServer, "listening");
  const url = `http://127.0.0.1:${localServer.address().port}/api/contact`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validSubmission),
    });
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), {
      success: false,
      message: "Unable to submit your enquiry. Please try again later.",
    });
  } finally {
    localServer.close();
    await once(localServer, "close");
  }
});

test("contact endpoint does not attempt delivery without local SMTP credentials", async () => {
  let attemptedDelivery = false;
  const app = createApp({
    env: { ...smtpEnv, SMTP_PASS: "" },
    sendMail: async () => {
      attemptedDelivery = true;
      return { accepted: ["sales@tejays.in"] };
    },
  });
  const localServer = createServer(app);
  localServer.listen(0, "127.0.0.1");
  await once(localServer, "listening");
  const url = `http://127.0.0.1:${localServer.address().port}/api/contact`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validSubmission),
    });
    assert.equal(response.status, 503);
    assert.equal(attemptedDelivery, false);
  } finally {
    localServer.close();
    await once(localServer, "close");
  }
});

test("contact endpoint rate limits repeated requests", async () => {
  const app = createApp({ env: smtpEnv, sendMail: async () => ({}), rateLimitMax: 1 });
  const limitedServer = createServer(app);
  limitedServer.listen(0, "127.0.0.1");
  await once(limitedServer, "listening");
  const url = `http://127.0.0.1:${limitedServer.address().port}/api/contact`;
  try {
    const request = () =>
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
    assert.equal((await request()).status, 400);
    const limitedResponse = await request();
    assert.equal(limitedResponse.status, 429);
    assert.ok(limitedResponse.headers.get("retry-after"));
  } finally {
    limitedServer.close();
    await once(limitedServer, "close");
  }
});
