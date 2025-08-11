import express from "express";
import cors from "cors";
import contactRoutes from "./src/api/contact.js";

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/contact", contactRoutes);

export default app;
