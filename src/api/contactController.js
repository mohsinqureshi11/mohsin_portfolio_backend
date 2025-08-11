import { sendMail } from "../helper/mailer.js";
import { sendSuccess, sendError } from "../response/responseHandler.js";

export const contactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return sendError(res, 400, "Please fill all the fields");
    }

    await sendMail({ name, email, message });

    return sendSuccess(res, "Message sent successfully!");
  } catch (error) {
    console.error("Contact form error:", error);
    return sendError(res, 500, "Failed to send message");
  }
};
