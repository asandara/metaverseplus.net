import nodemailer from "nodemailer";

export default function handler(req, res) {
  sendEmail(req.body);
  res.status(200).json({ success: true });
}
async function sendEmail(body) {
  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 587,
    secure: false,
    auth: {
      user: "info@metaverseplus.studio",
      pass: "@2zzpWE6*D3DhinoD!h",
    },
  });

  const mailOptions = {
    from: "info@metaverseplus.studio",
    to: "info@metaverseplus.studio",
    subject: "Contact Metaverse Plus",
    html: `
    <td align="left" class="esd-block-text es-p20t es-p10b">
    <p>Hi Metaverse Plus,<br><br></p>
    <p>
    ${body.message}
    <br></p>
</td>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
