const { body, checkSchema } = require('express-validator')

const name = {
  "name": {
    in: 'body',
    matches: {
      options: [/[\p{L}\s]+/gu],     
      errorMessage: "Invalid city name"
    }
  }
}

const region = {
  "region": {
    in: 'body',
    matches: {
      options: [/\p{L}+-\p{L}+/gu],
      errorMessage: "Invalid region"
    }
  }
}

module.exports = {
  add : [
    body('name')
      .isLength({min: 1, max: 20})
      .withMessage(`Name must be between 1 or max 20 length`)
      .trim(),
    checkSchema(name),
    body('region')
      .isLength({min: 1, max: 30})
      .withMessage(`Value must be between 1 or max 15 length`)
      .trim(),
    checkSchema(region)
    ]
}
