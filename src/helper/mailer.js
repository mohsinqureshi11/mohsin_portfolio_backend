import nodemailer from "nodemailer";
import dotenv, { config } from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail = async ({ name, email, message }) => {
  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact Form Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  return transporter.sendMail(mailOptions);
};
