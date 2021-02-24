const { query } = require('express-validator')


module.exports = {
  search : [
    query('searchValue')
      .isAlphanumeric()
      .withMessage('Please enter an alphanumeric value')
      .isLength({min: 1, max: 15})
      .withMessage(`Value must be between 1 or max 15 length`)
      .trim(),
    query('page')
      .isInt()
      .withMessage('Please enter an int')
      .isLength({min: 1, max: 2})
      .withMessage('Please enter a number of length between min 1 and max 2')
      .trim(),
    ],

    add : [
      query('name')
        .isLength({min: 2, max: 30})
        .withMessage(`Name must be between 1 or max 15 length`)
        .trim(),
      query('description')
        .isLength({min: 3, max: 350})
        .withMessage('Description must be at least 3 characters long and max 250')
        .trim(),
      query('price')
        .isLength({min: 1, max: 6})
        .withMessage('Price must be at least 1 characters long and max 6')
        .isDecimal({min:1})
        .withMessage('Price must be a decimal value')
        .trim(),
      query('email')
        .isEmail()
        .withMessage('Email must be an email')
        .trim(),
      query('additionalData')
        .isLength({max: 150})
        .withMessage('Additional info must be min 3 characters long, max 50')
        .trim(),
      query('ledger')
        .isBoolean()
        .withMessage('ledger must be boolean'),
      query('lumpSum')
        .isBoolean()
        .withMessage('lump sum must be boolean'),
      query('inPerson')
        .isBoolean()
        .withMessage('inPerson must be boolean'),
    ]

}
