import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { verifyAccountTemplate } from '../utils/emailTemplate.js';

dotenv.config();

export const sendEmail = async ({ receiverEmail, title, serviceDescription }) => {
  try {
    if (!receiverEmail) {
      throw new Error("No recipient email provided");
    }

    const transporter = nodemailer.createTransport({
      port: Number(process.env.SMTP_HOST_PORT),
      host: process.env.SMTP_HOST,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const mailOptions = verifyAccountTemplate(receiverEmail, serviceDescription, title);

    return await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error while sending email:', error.message);
  }
};
