import express from "express";
import { contactForm } from "./contactController.js";

const router = express.Router();

router.post("/", contactForm);

export default router;
