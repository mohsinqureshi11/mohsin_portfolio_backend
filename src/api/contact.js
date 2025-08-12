import { sendMail } from "../helper/mailer.js";
import { successResponse, errorResponse } from "../response/responseHandler.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return errorResponse(res, "Method Not Allowed", 405);
  }

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
}
