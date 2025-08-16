import express from "express";
import { sendMail } from "../helper/mailer.js";
import { successResponse, errorResponse } from "../response/responseHandler.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return errorResponse(res, "Missing required fields", 400);
  }

  try {
    await sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `Contact form message from ${name}`,
      text: message,
    });

    return successResponse(res, "Message sent successfully");
  } catch (err) {
    console.error("Email sending error:", err);
    return errorResponse(res, "Failed to send message");
  }
});

export default router;
