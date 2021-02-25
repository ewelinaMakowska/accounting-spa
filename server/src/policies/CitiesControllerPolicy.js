const { body, checkSchema } = require('express-validator')
const name = {
  "name": {
    in: 'body',
    matches: {
      options: [/[\p{Letter}\s]+/gu],
      errorMessage: "Invalid city name"
    }
  }
}

const region = {
  "region": {
    in: 'body',
    matches: {
      options: [/[\p{Letter}\s]+/gu],
      errorMessage: "Invalid region"
    }
  }
}

module.exports = {
  add : [
    body('name')
      .isLength({min: 1, max: 15})
      .withMessage(`Name must be between 1 or max 15 length`)
      .trim(),
    checkSchema(name),
    body('region')
      .isLength({min: 1, max: 15})
      .withMessage(`Value must be between 1 or max 15 length`)
      .trim(),
    checkSchema(region)
    ]
}
