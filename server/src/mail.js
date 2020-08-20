const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const { callbackPromise } = require('nodemailer/lib/shared');

const auth = {
  auth: {
    api_key: '52819eac8b127bcbbb6e8a85835fc9ba-203ef6d0-e2e083fa',
    domain: 'sandbox3534a71225ff4e4fbbe9e176d4a8cedd.mailgun.org'
  }
}

const transporter = nodemailer.createTransport(mailGun(auth)); 



const sendMail = (sender, recipient, subject, text, callback) => { 
  const mailOptions = {
    from: sender, 
    to: recipient,
    subject: subject,
    text: text
  }

  transporter.sendMail(mailOptions, function(err, data) { 
    if(err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  })
}

module.exports = sendMail;

