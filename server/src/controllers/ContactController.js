const sendMail = require('../mail')

module.exports = {

  async mailCompany (req, res, next) {
    res.send(req.body);
    
    console.log('Data on server:')
    console.log(`Data sender ${req.body.email}`);
    console.log(`Message ${req.body.message}`);
    console.log(`To ${req.body.company}`);


    sendMail(req.body.email, req.body.company, 'Formularz kontaktowy', req.body.message);
    
  }
}