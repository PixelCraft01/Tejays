import nodemailer from "nodemailer";
import { getSmtpConfig } from "./server.js";

const smtp = getSmtpConfig(process.env);

if (!smtp.ready) {
  console.error("SMTP is not configured. Check the project-root .env file.");
  process.exitCode = 1;
} else {
  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: { user: smtp.user, pass: smtp.pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });

  try {
    await transporter.verify();
    console.log("SMTP authentication and connection verified. No email was sent.");
  } catch (error) {
    console.error(
      "SMTP verification failed:",
      typeof error?.code === "string" ? error.code : "UNKNOWN",
    );
    process.exitCode = 1;
  } finally {
    transporter.close();
  }
}
