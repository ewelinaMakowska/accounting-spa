const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: '52819eac8b127bcbbb6e8a85835fc9ba-203ef6d0-e2e083fa',
    domain: 'sandbox3534a71225ff4e4fbbe9e176d4a8cedd.mailgun.org'
  }
}

const transporter = nodemailer.createTransport(mailGun(auth)); 

const mailOptions = {
  from: 'klient0@op.pl', 
  to: 'capp_first@interia.pl',
  subject: 'test',
  text: 'elo'
}

transporter.sendMail(mailOptions, function(err, data) {
  if(err) {
    console.log(`Sending e-mail error:${err}`)
  } else {
    console.log('e-mail sent')
  }
})