require("dotenv").config();
const nodemailer = require("nodemailer");

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use("/", (req, res) => {
//   res.send("<h1> Working... </h1>");
// });

server.post("/email", (req, res) => {
  const { senderemail, text, subject, name } = req.body;
  const message = `sender:${name} senderemail:${senderemail} message: ${text}`;
  console.log(message);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_ADDRESS,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: "ojokuredim@gmail.com",
    to: "oladimejianthonyojokure@gmail.com",
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.status(500).json({
        error,
        message: `sending email failed!`,
      });
    } else {
      res.status(200).json({
        response,
        message: "email sent successfully",
      });
    }
  });
});

module.exports = server;
