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

}
