import type { NextApiRequest, NextApiResponse } from "next";
import Nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let formData = req.body;
  formData = JSON.parse(formData);
  const transporter = Nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "justin.bot.do.not.reply@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "justin.bot.do.not.reply@gmailcom",
    to: "justin.b.cortez@gmail.com",
    subject: `Message From ${formData.name}`,
    text: formData.message,
    html: `<div>${formData.message}</div><p>Sent from ${formData.email}</p>`,
  };

  if (req.method === "POST") {
    try {
      transporter.sendMail(mailData, (err, info) => {
        if (err) console.log(err);
        else console.log(info);
      });
      res.status(200).send("Form data successfully sent to email");
    } catch (e) {
      res.status(500).send(`Error sending form data to email: ${e}`);
    }
  }
}
