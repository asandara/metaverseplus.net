export default async function (req, res) {

  
  const express = require("express");

  const cors = require("cors");
  const app = express();
  app.use(cors());
  app.use(express.json());



  const { google } = require('googleapis');

  const { OAuth2 } = google.auth;



  const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

  const oauth2Client = new OAuth2(
    process.env.GMAIL_CLIENTID,
    process.env.GMAIL_CLIENTSECRET,
    OAUTH_PLAYGROUND
  );
  
    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_RFRESHTOKEN,
    });
    const accessToken = oauth2Client.getAccessToken();

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
       auth: {
        type: 'OAuth2',
      user: process.env.GMAIL_ACC,
      clientId: process.env.GMAIL_CLIENTID,
      clientSecret: process.env.GMAIL_CLIENTSECRET,
      refreshToken: process.env.GMAIL_RFRESHTOKEN,
      accessToken: process.env.GMAIL_ACCESSTOKEN,
      accessToken,
            
         }
  });
  


  const mailData = {
      from: 'info@metaverseplus.studio',
      to: 'info@metaverseplus.studio',
      subject: `${req.body.email}`,
      text: req.body.message + " | Hello: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Massage send by : ${req.body.email}</p>`
  };





// await new Promise((resolve, reject) => {
//   transporter.sendMail(mailData, (err, info) => {
//     if (err) {
//       console.log(err);
//       res.send("error" + JSON.stringify(err));
//     } else {
//       console.log("Email success");
//       res.send("success");
//     }
//   });
// });

await new Promise((resolve, reject) => {
  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.error(err);
      reject(err);
      res.send("error" + JSON.stringify(err));
    } else {
      resolve(info);
      res.send("success");
    }
  });
});
}
