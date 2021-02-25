const { query, checkSchema } = require('express-validator')
const name = {
  "name": {
    in: 'query',
    matches: {
      options: [/[\p{Letter}\s]+/gu],
      errorMessage: "Invalid city name"
    }
  }
}

const region = {
  "region": {
    in: 'query',
    matches: {
      options: [/[\p{Letter}\s]+/gu],
      errorMessage: "Invalid region"
    }
  }
}

module.exports = {
  add : [
    query('name')
      .isLength({min: 1, max: 15})
      .withMessage(`Name must be between 1 or max 15 length`)
      .trim(),
    checkSchema(name),
    query('region')
      .isLength({min: 1, max: 15})
      .withMessage(`Value must be between 1 or max 15 length`)
      .trim(),
    checkSchema(region)
    ]
}
