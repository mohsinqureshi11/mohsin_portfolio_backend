import express from "express";
import cors from "cors";
import contactRoutes from "./src/api/contact.js";

const app = express();

// app.use(cors());//local chalane k liye isko enable kro 
app.use(cors({
  origin: "https://mohsinqureshiportfolio.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// API routes
app.use("/api/contact", contactRoutes);

export default app;
