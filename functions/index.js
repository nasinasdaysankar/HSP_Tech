const nodemailer = require("nodemailer");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { defineSecret } = require("firebase-functions/params");

exports.sendContactEmail = onDocumentCreated(
  {
    document: "contactSubmissions/{docId}",
    region: "us-central1"        // <---- IMPORTANT FIX
  },
  async (event) => {

    const data = event.data.data();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "directorhspresearchacademy@gmail.com",
        pass: "ghup zyim txis wtsa",
      },
    });

    const mailOptions = {
  from: '"HSP Research Academy" <directorhspresearchacademy@gmail.com>',
  to: "directorhspresearchacademy@gmail.com",
  subject: "New Contact Form Submission",
  html: `
      <h2>New Contact Request</h2>
      <p><strong>First Name:</strong> ${data.firstName}</p>
      <p><strong>Last Name:</strong> ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Service Interest:</strong> ${data.serviceInterest}</p>
      <p><strong>Message:</strong><br>${data.message}</p>
  `,
};


    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }
);
