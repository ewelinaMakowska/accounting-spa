//const sendMail = require('../mail')
//const { validationResult } = require('express-validator/check')

module.exports = {
  async registerUser(req, res) {
    res.sendStatus(200).json({ message: 'OK!'});
  }
} //module exports end