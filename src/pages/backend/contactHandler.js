import nodemailer from "nodemailer";

export async function handleContact(req, res) {
    try {
        const { name, phone, email, city, pincode, service, message } = req.body;

        // Validate all required fields
        if (!name || !phone || !email || !city || !pincode || !service || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }

        const smtpUser = process.env.SMTP_USER || process.env.BREVO_SMTP_USER;
        const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD || process.env.BREVO_SMTP_KEY;
        const contactEmail = process.env.CONTACT_EMAIL || process.env.MAIL_TO || "zindadil042@gmail.com";

        if (!smtpUser || !smtpPass) {
            throw new Error("SMTP credentials are not configured on the server.");
        }

        // Create Nodemailer transporter with Brevo SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
            port: Number(process.env.SMTP_PORT || 587),
            secure: false, // TLS (not SSL)
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        // Format the email body with all form data
        const emailContent = `TEJAYS - New Contact Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
City: ${city}
PIN Code: ${pincode}
Service: ${service}

Message:
${message}

---
Submitted from: TEJAYS Website`;

        // Send email to recipient
        await transporter.sendMail({
            from: smtpUser,
            to: contactEmail,
            replyTo: email,
            subject: "TEJAYS - New Contact Enquiry",
            text: emailContent,
            html: `<p><strong>TEJAYS - New Contact Enquiry</strong></p><br/><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Phone:</strong> ${escapeHtml(phone)}</p><p><strong>City:</strong> ${escapeHtml(city)}</p><p><strong>PIN Code:</strong> ${escapeHtml(pincode)}</p><p><strong>Service:</strong> ${escapeHtml(service)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p><hr/><p><em>Submitted from: TEJAYS Website</em></p>`,
        });

        return res.json({
            success: true,
            message: "Your enquiry has been sent successfully! We'll get back to you soon.",
        });
    } catch (error) {
        console.error("Contact form error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Unable to send your enquiry. Please try again later.",
        });
    }
}

// Helper function to escape HTML special characters
function escapeHtml(text) {
    const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}
