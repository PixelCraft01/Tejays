import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { handleContact } from "./contactHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

const allowedOrigins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:4173",
    "http://127.0.0.1:4173",
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
            return;
        }

        callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
}));
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