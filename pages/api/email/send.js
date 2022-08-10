const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const inLineCss = require('nodemailer-juice');

const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.NEXT_CLIENT_ID,
    process.env.NEXT_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.NEXT_REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token :(", err);
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.NEXT_PUBLIC_EMAIL,
      accessToken,
      clientId: process.env.NEXT_CLIENT_ID,
      clientSecret: process.env.NEXT_CLIENT_SECRET,
      refreshToken: process.env.NEXT_REFRESH_TOKEN,
    },
  });

  transporter.use('compile', inLineCss());
  return transporter;
};

  

const sendEmail = async (emailOptions) => {
  try {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(emailOptions);
  } catch (error) {
    console.log(error);
  }
};

export default async function handler(req, res) {
  try {
    const { name, email, event } = await req.body;
    await sendEmail({
      subject: `${event.title} Registration`,
      text: `you registered for an event ${event.title} \n ${event.body}`,
      to: email,
      from: process.env.NEXT_PUBLIC_EMAIL,
      html:  `<style> h3 </style><h3>${event.title} <br /> ${event.body}</h3>`
    });

    res.send({ message: "success" });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
