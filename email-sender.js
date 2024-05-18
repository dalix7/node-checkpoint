var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "letaiefdali@gmail.com",
    pass: "xxxxxxx",
  },
});

var mailOptions = {
  from: "letaiefdali@gmail.com",
  to: "ragnar6170@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
