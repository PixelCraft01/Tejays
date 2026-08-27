import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "TEJAYS Backend is running",
    });
});

app.post("/api/contact", async (req, res) => {
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
            to: "info@tejays.com",
            replyTo: email,
            subject: "New Contact Enquiry - TEJAYS Website",
            text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCity: ${city}\nPIN Code: ${pincode}\nService: ${service}\nMessage: ${message}`,
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
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`TEJAYS Backend running on http://localhost:${PORT}`);
});