import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { handleContact } from "./contactHandler.js";

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

app.post("/api/contact", handleContact);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`TEJAYS Backend running on http://localhost:${PORT}`);
});