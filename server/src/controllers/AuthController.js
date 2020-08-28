//const sendMail = require('../mail')
//const { validationResult } = require('express-validator/check')

const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
//const { Op } = require('sequelize');

function jwtRegUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, { expiresIn: ONE_WEEK })
}

module.exports = {

   async registerUser(req, res) {
   
    try  {

      const user = {
        email: req.body.eMail,
        password: req.body.password,
        firstname: req.body.firstName,
        lastname: req.body.lastName
      }

      const createdUser = await User.create(user);
      const userJson = createdUser.toJSON();

      res.send({
        user : userJson,
        token: jwtRegUser(userJson)
      }) 
   
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  }  //registerUser end

 

} //module exports end