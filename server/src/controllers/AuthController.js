//const sendMail = require('../mail')
//const { validationResult } = require('express-validator/check')

const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config');
const { validationResult } = require('express-validator');
const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');
//const { Op } = require('sequelize');

/* function generateJWT(user) {
  const tokenData = { username: user.username, id: user.id };
  return jwt.sign({ user: tokenData }, config.authentication.jwtSecret) //todo: change to process.env.jwt
} */

function jwtRegUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, { expiresIn: ONE_WEEK }) //todo: change to process.env.jwt
}

module.exports = {

   async registerUser(req, res) {

   const errors = validationResult(req);
   
    if(errors.isEmpty()) {
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
    } else {
      res.status(422).send({
        error: errors
      })
    }
   
  },  //registerUser end


  async login(req, res) {
    res.status(200).send( {
      message: 'hello'
    })
  }

 

} //module exports end