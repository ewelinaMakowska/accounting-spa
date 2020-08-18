const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: '52819eac8b127bcbbb6e8a85835fc9ba-203ef6d0-e2e083fa',
    domain: 'sandbox3534a71225ff4e4fbbe9e176d4a8cedd.mailgun.org'
  }
}

const transporter = nodemailer.createTransport(mailGun(auth)); 



const sendMail = (sender, recipient, subject, text) => { 
  const mailOptions = {
    from: sender, 
    to: recipient,
    subject: subject,
    text: text
  }

  transporter.sendMail(mailOptions, function(err, data) { //callback?
    if(err) {
      console.log(`Sending e-mail error:${err}`)
    } else {
      console.log('e-mail sent')
    }
  })
}

module.exports = sendMail;

