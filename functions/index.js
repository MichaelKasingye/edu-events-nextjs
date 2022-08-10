const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

//google account credentials used to send email
const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_EMAIL,
  },
});

exports.sendEmail = functions.firestore
  .document("event_atendees/{event_atendeesId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `***********`,
      to: snap.data().email,
      subject: "Event Registration",
      html: `<h1>Event Confirmation</h1>
                                <p>
                                   <b>Email: </b>${snap.data().email}<br>
                                </p>`,
    };

    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent!");
    });
  });
