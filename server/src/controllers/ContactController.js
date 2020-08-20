/* const sendMail = require('../mail')

module.exports = {

  async mailCompany (req, res, next) {
    res.send(req.body);
    
    console.log('Data on server:')
    console.log(`Data sender ${req.body.email}`);
    console.log(`Message ${req.body.message}`);
    console.log(`To ${req.body.company}`);


    sendMail(req.body.email, req.body.company, 'Formularz kontaktowy', req.body.message);
    sendMail('companies-catalogue@op.pl', req.body.email, 'Potwierdzenie wysłania formularza', 'Dziękujemy za wypełnienie formularza'); //musi być koniecznie zweryfikowany e-mail klienta
    
  }
} */

/* const sendMail = require('../mail')

module.exports = {

  mailCompany (req, res, next) {
    
    console.log('Data on server:')
    console.log(`Data sender ${req.body.email}`);
    console.log(`Message ${req.body.message}`);
    console.log(`To ${req.body.company}`);


    sendMail(req.body.email, req.body.company, 'Formularz kontaktowy', req.body.message);

    sendMail('companies-catalogue@op.pl', 
    req.body.email, 
    'Potwierdzenie wysłania formularza', 
    'Dziękujemy za wypełnienie formularza'); 
    
  }
} */


const sendMail = require('../mail')

module.exports = {

  mailCompany (req, res, next) {
    
    console.log('Data on server:')
    console.log(`Data sender ${req.body.email}`);
    console.log(`Message ${req.body.message}`);
    console.log(`To ${req.body.company}`);


    sendMail(req.body.email,
       req.body.company, 
       'Formularz kontaktowy',
        req.body.message, 
        function(err, data) {
          if(err) {
            res.sendStatus(500).json({ message: 'Internal error'});
          } else {
            sendMail('companies-catalogue@op.pl', 
            req.body.email, 
            'Potwierdzenie wysłania formularza', 
            'Dziękujemy za wypełnienie formularza', 
            function(err, data) {
              if(err) {
                res.status(500).json({ message: 'Failed to send confirmation e-mail.'});
              } else {
                res.status(200).json({ message: 'E-mails sent!'});
              }
            });
          }
      });    
  }
}