import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config({
  path: fileURLToPath(new URL("../.env", import.meta.url)),
});

const DEFAULT_SMTP_HOST = "mail.tejays.in";
const DEFAULT_SMTP_PORT = "465";
const DEFAULT_SMTP_USER = "no-reply@tejays.in";
const DEFAULT_MAIL_FROM = "no-reply@tejays.in";
const DEFAULT_MAIL_TO = "sales@tejays.in";
const SERVICE_OPTIONS = new Set([
  "General Enquiry",
  "Broadband",
  "Bulk Bandwidth",
  "Peering",
  "IPTV",
  "OTT",
  "Internet Lease Line (ILL)",
  "Corporate Broadband",
  "MPLS-VPN",
  "Corporate P2P Lease Line",
  "Corporate Managed Services",
  "Fiber On Lease",
  "Security and Surveillance",
  "WiFi Solutions",
  "Networking Solutions",
]);
const EMAIL_PATTERN =
  /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$/i;

function validEmail(value) {
  return (
    value.length <= 254 &&
    !value.includes("..") &&
    EMAIL_PATTERN.test(value)
  );
}

function containsDisallowedControlCharacters(value) {
  for (const character of value) {
    const codePoint = character.codePointAt(0);
    if (
      (codePoint < 32 && codePoint !== 9 && codePoint !== 10 && codePoint !== 13) ||
      codePoint === 127
    ) {
      return true;
    }
  }

  return false;
}

export function validateContact(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { error: "Please provide valid contact details." };
  }

  const name =
    typeof body.name === "string" ? body.name.trim().replace(/\s+/g, " ") : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const city =
    typeof body.city === "string" ? body.city.trim().replace(/\s+/g, " ") : "";
  const pincode = typeof body.pincode === "string" ? body.pincode.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const message =
    typeof body.message === "string"
      ? body.message.replace(/\r\n?/g, "\n").trim()
      : "";

  if (
    name.length < 2 ||
    name.length > 100 ||
    !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name)
  ) {
    return { error: "Please enter a valid name." };
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    return { error: "Please enter a valid 10-digit phone number." };
  }

  if (
    !validEmail(email) ||
    /[\r\n]/.test(email)
  ) {
    return { error: "Please enter a valid email address." };
  }

  if (
    city.length < 2 ||
    city.length > 100 ||
    !/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(city)
  ) {
    return { error: "Please enter a valid city." };
  }

  if (!/^[0-9]{6}$/.test(pincode)) {
    return { error: "Please enter a valid 6-digit PIN code." };
  }

  if (!SERVICE_OPTIONS.has(service)) {
    return { error: "Please select a valid service." };
  }

  if (
    message.length === 0 ||
    message.length > 2000 ||
    containsDisallowedControlCharacters(message)
  ) {
    return { error: "Please enter a message of up to 2000 characters." };
  }

  return {
    data: { name, phone, email, city, pincode, service, message },
  };
}

export function getSmtpConfig(env) {
  const secureValue = (env.SMTP_SECURE ?? "true").toLowerCase();
  const port = Number(env.SMTP_PORT ?? DEFAULT_SMTP_PORT);
  const config = {
    host: env.SMTP_HOST?.trim() || DEFAULT_SMTP_HOST,
    port,
    secure: secureValue === "true",
    user: env.SMTP_USER?.trim() || DEFAULT_SMTP_USER,
    pass: env.SMTP_PASS,
    from: env.MAIL_FROM?.trim() || DEFAULT_MAIL_FROM,
    to: env.MAIL_TO?.trim() || DEFAULT_MAIL_TO,
  };

  config.ready =
    Number.isInteger(port) &&
    port > 0 &&
    port <= 65535 &&
    (secureValue === "true" || secureValue === "false") &&
    Boolean(config.host && config.user && config.pass?.trim()) &&
    validEmail(config.from) &&
    validEmail(config.to);

  return config;
}

function securityHeaders(_req, res, next) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader("Cache-Control", "no-store");
  next();
}

function corsPolicy(origins) {
  return (req, res, next) => {
    const origin = req.get("origin");

    if (origin) {
      if (!origins.has(origin)) {
        return res.status(403).json({
          success: false,
          message: "This website is not allowed to submit enquiries.",
        });
      }

      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader("Vary", "Origin");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    }

    if (req.method === "OPTIONS") {
      return res.sendStatus(204);
    }

    return next();
  };
}

function contactRateLimit({ maxRequests = 5, windowMs = 15 * 60 * 1000 } = {}) {
  const requestsByAddress = new Map();

  return (req, res, next) => {
    const now = Date.now();
    const address = req.ip || req.socket.remoteAddress || "unknown";
    let entry = requestsByAddress.get(address);

    if (!entry || entry.resetAt <= now) {
      if (requestsByAddress.size >= 10000) {
        for (const [key, value] of requestsByAddress) {
          if (value.resetAt <= now) requestsByAddress.delete(key);
        }
      }

      if (requestsByAddress.size >= 10000 && !entry) {
        return res.status(503).json({
          success: false,
          message: "Enquiry service is temporarily unavailable. Please try again later.",
        });
      }

      entry = { count: 0, resetAt: now + windowMs };
      requestsByAddress.set(address, entry);
    }

    if (entry.count >= maxRequests) {
      res.setHeader(
        "Retry-After",
        String(Math.max(1, Math.ceil((entry.resetAt - now) / 1000))),
      );
      return res.status(429).json({
        success: false,
        message: "Too many enquiries. Please wait before trying again.",
      });
    }

    entry.count += 1;
    return next();
  };
}

function recipientWasAccepted(info, recipient) {
  return (
    Array.isArray(info?.accepted) &&
    info.accepted.some((accepted) => {
      const address =
        typeof accepted === "string" ? accepted : accepted?.address;
      return (
        typeof address === "string" &&
        address.toLowerCase() === recipient.toLowerCase()
      );
    })
  );
}

export function createApp({
  env = process.env,
  sendMail,
  rateLimitMax = 5,
  rateLimitWindowMs = 15 * 60 * 1000,
} = {}) {
  const app = express();
  const smtp = getSmtpConfig(env);
  const allowedOrigins = new Set(
    (env.FRONTEND_ORIGINS ?? "")
      .split(",")
      .map((origin) => origin.trim())
      .filter(Boolean),
  );
  const transporter =
    smtp.ready && !sendMail
      ? nodemailer.createTransport({
          host: smtp.host,
          port: smtp.port,
          secure: smtp.secure,
          auth: { user: smtp.user, pass: smtp.pass },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 20000,
        })
      : null;
  const deliver = sendMail ?? transporter?.sendMail.bind(transporter);

  app.disable("x-powered-by");
  app.use(securityHeaders);
  app.use(corsPolicy(allowedOrigins));
  app.use(express.json({ limit: "10kb", strict: true }));

  app.get("/api/health", (_req, res) => {
    res.json({
      success: true,
      status: "ok",
      smtpConfigured: smtp.ready,
    });
  });

  app.post(
    "/api/contact",
    contactRateLimit({
      maxRequests: rateLimitMax,
      windowMs: rateLimitWindowMs,
    }),
    async (req, res) => {
      const { data, error } = validateContact(req.body);
      if (error) {
        return res.status(400).json({ success: false, message: error });
      }

      if (!smtp.ready || !deliver) {
        return res.status(503).json({
          success: false,
          message: "Enquiry service is not configured yet. Please try again later.",
        });
      }

      const text = [
        "New enquiry from the TEJAYS website",
        "",
        `Name: ${data.name}`,
        `Phone: +91 ${data.phone}`,
        `Email: ${data.email}`,
        `City: ${data.city}`,
        `PIN code: ${data.pincode}`,
        `Service: ${data.service}`,
        "",
        "Message:",
        data.message,
      ].join("\n");

      try {
        const info = await deliver({
          from: smtp.from,
          to: smtp.to,
          replyTo: data.email,
          subject: "New TEJAYS website enquiry",
          text,
        });
        if (!recipientWasAccepted(info, smtp.to)) {
          console.error("Contact email delivery failed: RECIPIENT_NOT_ACCEPTED");
          return res.status(502).json({
            success: false,
            message: "Unable to submit your enquiry. Please try again later.",
          });
        }
      } catch (error) {
        console.error(
          "Contact email delivery failed:",
          typeof error?.code === "string" ? error.code : "UNKNOWN",
        );
        return res.status(502).json({
          success: false,
          message: "Unable to submit your enquiry. Please try again later.",
        });
      }

      return res.json({
        success: true,
        message: "Enquiry submitted successfully.",
      });
    },
  );

  app.use((error, _req, res, _next) => {
    if (error?.status === 413) {
      return res.status(413).json({
        success: false,
        message: "The submitted request is too large.",
      });
    }

    if (error instanceof SyntaxError && error.status === 400) {
      return res.status(400).json({
        success: false,
        message: "Request body must be valid JSON.",
      });
    }

    console.error(
      "Unexpected API error:",
      typeof error?.code === "string" ? error.code : "UNKNOWN",
    );
    return res.status(500).json({
      success: false,
      message: "Unable to submit your enquiry. Please try again later.",
    });
  });

  return app;
}

const port = Number(process.env.PORT ?? "5000");
if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    console.error("PORT must be an integer between 1 and 65535.");
    process.exitCode = 1;
  } else {
    createApp().listen(port, () => {
      console.log(`TEJAYS enquiry API listening on port ${port}.`);
    });
  }
}
