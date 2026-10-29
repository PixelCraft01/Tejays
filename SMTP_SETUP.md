# TEJAYS SMTP Contact Form Setup

## Overview

The existing Contact page submits its current fields as JSON to `POST /api/contact`. A local Express API independently validates the details, limits repeated requests, and sends a plain-text email over authenticated SSL/TLS SMTP. Enquiries go to `sales@tejays.in` from `no-reply@tejays.in`; the customer's validated email is set as `Reply-To`.

The API never accepts a sender, recipient, SMTP setting, or password from the browser. It reports success only after Nodemailer receives a successful SMTP response. This local in-memory rate limit and the browser's duplicate-submit guard reduce accidental or repeated submissions, but do not guarantee exactly-once delivery.

## Files

- Created `server/server.js` for the API, validation, security headers, optional origin allowlist, rate limiting, health endpoint, and SMTP sending.
- Created `server/server.test.js` for API validation, rate-limit, and mocked-mail delivery tests.
- Created `.env.example` with non-secret SMTP configuration placeholders.
- Created `.env` locally; it is ignored by Git and holds only local backend configuration.
- Created this setup guide.
- Updated `src/pages/Contact.jsx` to post JSON to `/api/contact` while preserving the page, fields, validation, feedback, and successful reset.
- Updated `package.json` with backend, combined-development, and backend-test scripts and the required dependencies.
- `vite.config.js` already contains the development `/api` proxy to `http://localhost:5000`; it was left intact.
- `.gitignore` already ignores `.env`, `.env.*`, and `*.env`, while explicitly allowing `.env.example`; it was left intact.

## SMTP settings and email flow

The server uses `mail.tejays.in`, port `465`, SSL/TLS (`SMTP_SECURE=true`), and SMTP authentication. The sender and SMTP user are `no-reply@tejays.in`; the fixed enquiry recipient is `sales@tejays.in`. The incoming IMAP/POP settings are not used.

The API makes a plain-text email with the submitted name, phone, email, city, PIN code, selected service, and message. It sets `Reply-To` to the validated customer email so the sales team can reply directly. Plain text avoids HTML-injection concerns.

## Configure the local password

1. Open the project-root `.env` file in VS Code.
2. Find `SMTP_PASS=`.
3. Enter the existing mailbox password after `=`. Do not send it in chat, add it to source code, or commit `.env`.
4. Save the file.

If the password contains spaces or `#`, wrap the value in double quotes. Escape an embedded double quote or backslash with a backslash according to dotenv syntax. Do not change or reset the mailbox password. `.env.example` contains only a placeholder; never put the real password there.

The backend loads `.env` from the project root based on the server file's location, even when started from another working directory. The API starts without a password so validation and the health endpoint remain testable. Until `SMTP_PASS` is filled in, valid submissions return a safe `503` configuration response and no email is attempted. `GET /api/health` reports only a boolean `smtpConfigured` status; it never returns credentials.

## Start locally on Windows / VS Code

From the project root in the VS Code PowerShell terminal:

```powershell
npm install
npm run dev:full
```

The combined command starts the API on port `5000` and Vite on port `5173`. Open the Contact page at:

`http://localhost:5173/contact-us`

The API health check is available at `http://localhost:5000/api/health`. The Vite proxy forwards browser requests to the local API, so the development browser uses the same-origin `/api/contact` URL.

To run the services separately, use two terminals:

```powershell
npm run dev:server
```

```powershell
npm run dev
```

To stop the combined servers, focus its terminal and press `Ctrl+C`. For separate terminals, press `Ctrl+C` in each.

## Test an enquiry

Run the automated API tests (they use a mocked mail sender and never send a real email):

```powershell
npm run test:server
```

To test SMTP connection and authentication without sending an email:

```powershell
npm run verify:smtp
```

This command reads the project-root `.env`, prints only a generic result or SMTP error code, and does not send mail.

After entering the password, start both local services, open the Contact page, and submit one clearly identifiable test enquiry. A success message is shown only if the backend confirms SMTP acceptance. Verify receipt in the `sales@tejays.in` mailbox, and inspect that the sender is `no-reply@tejays.in` and Reply-To is the test customer's email. Do not repeatedly submit real enquiries.

## Troubleshooting

- **Authentication error:** Check that `SMTP_USER` is `no-reply@tejays.in` and `SMTP_PASS` is the existing mailbox password, entered only in the ignored root `.env`. The API logs only an error code, never the password.
- **Connection failure or timeout:** Check network access from the computer to `mail.tejays.in:465`, DNS resolution, firewall rules, and whether the SMTP server is reachable. The server applies finite connection, greeting, and socket timeouts.
- **SSL/TLS error:** Port `465` requires implicit SSL/TLS and `SMTP_SECURE=true`. Do not switch to the incoming IMAP/POP ports.
- **Port already in use:** Stop the other process or choose another `PORT` in `.env` and update the target port in `vite.config.js` to match.
- **Frontend cannot reach API:** Run both services; confirm API port `5000` and the Vite `/api` proxy. The Vite browser URL is normally `http://localhost:5173/contact-us`.
- **API says SMTP is not configured:** Fill in `SMTP_PASS` in the root `.env`, save, then restart the backend.
- **SMTP accepts but email is not visible:** Check the sales inbox's spam/junk folder and mail-host delivery logs. An SMTP acceptance response does not prove mailbox receipt.
- **CORS rejection:** The local `.env` allowlist includes `http://localhost:5173` and `http://127.0.0.1:5173`. If you use another local address or a separately hosted frontend, add its exact origin to the comma-separated `FRONTEND_ORIGINS` server variable, without a trailing slash.
- **"Too many enquiries" during local testing:** `/api/contact` allows 5 requests per source IP per 15-minute window. Requests are counted before validation, so repeated invalid submissions or configuration checks also use the allowance; localhost requests share a bucket. Stop and restart the backend (or `npm run dev:full`) to clear the in-memory development counter, or wait 15 minutes from the first request. Do not disable rate limiting in production.

The in-memory rate limit is intended for local/small single-process use. A production deployment with multiple instances should use a shared rate-limit store and configure trusted proxy handling at the hosting layer.

## Checks and verification status

`npm run test:server` tests field validation, malformed email, long messages, fixed sender/recipient, Reply-To, health, and rate limiting with a mocked sender. Build and lint should be run from the project root with `npm run build` and `npm run lint`.

Actual SMTP authentication, SMTP acceptance, and mailbox receipt require the password and access to the real SMTP account; automated tests do not claim to verify those.

## Future live deployment

This task configures local development only; nothing is deployed or changed on live hosting. A static Vite deployment cannot run this Express server. For production:

1. Deploy the backend to a compatible Node.js host or supported serverless environment.
2. Set SMTP credentials and other environment variables privately on that host.
3. Configure the production frontend origin allowlist if the frontend and backend use different origins, or route API requests through a same-origin reverse proxy.
4. Set the production frontend API URL or reverse proxy correctly.
5. Use HTTPS for the public website and API.
6. Verify SMTP connectivity from the production host.
7. Submit and verify one real production enquiry in `sales@tejays.in`, including its From and Reply-To values.
8. Keep SMTP credentials out of frontend code, build output, and public repositories.

Successful local testing alone does not establish production email delivery.
