const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

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
        const {
            name,
            phone,
            email,
            subject,
            message,
        } = req.body;

        if (!name || !phone || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }

        const whatsappMessage = `

*TEJAYS - New Contact Message*

*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*Subject:* ${subject || "Not specified"}

*Message:*
${message}

        `.trim();

        await axios.post(
            `https://graph.facebook.com/${process.env.WHATSAPP_API_VERSION}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
            {
                messaging_product: "whatsapp",
                to: process.env.ADMIN_WHATSAPP_NUMBER,
                type: "text",
                text: {
                    body: whatsappMessage,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return res.json({
            success: true,
            message: "Message sent successfully!",
        });

    } catch (error) {
        console.error(
            "WhatsApp API Error:",
            error.response?.data || error.message
        );

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