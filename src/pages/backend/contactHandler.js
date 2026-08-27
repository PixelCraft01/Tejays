import nodemailer from "nodemailer";

export async function handleContact(req, res) {
    try {
        const { name, phone, email, city, pincode, service, message } = req.body;

        if (!name || !phone || !email || !city || !pincode || !service || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: "prajapatnilesh001@gmail.com",
            replyTo: email,
            subject: "New Contact Enquiry - TEJAYS Website",
            text: `TEJAYS - New Contact Enquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCity: ${city}\nPIN Code: ${pincode}\nService: ${service}\nMessage: ${message}\n\nSubmitted from: TEJAYS Website`,
        });

        return res.json({
            success: true,
            message: "Message sent successfully!",
        });
    } catch (error) {
        console.error("Contact email error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Message could not be sent.",
        });
    }
}
