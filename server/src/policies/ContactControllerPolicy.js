const { check, checkSchema, body } = require('express-validator')

module.exports = {

  email : [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid e-mail')
      .custom((value, { req }) => {  /* custom validator to check if mail is verified */
        if ((value.toLowerCase() !== 'client_first@interia.pl') && (value.toLowerCase() !== 'client_second@interia.pl')) {
          throw new Error("This e-mail address is not verified by MailGun");
        }
        return true;
      })
      .withMessage('Message')
      .normalizeEmail(), //partially 'blocked' by custom validator
    body('name', 'Please enter a valid name')
      .isAlphanumeric()
      .isLength({min: 2, max: 25})
      .trim(),
    body('message', 'Please enter a valid message')
      .isLength({min: 3, max: 400})
      .trim(),
  ]

}