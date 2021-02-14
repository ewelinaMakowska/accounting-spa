//const sendMail = require('../mail')
//const { validationResult } = require('express-validator/check')

const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config');
const { validationResult } = require('express-validator');
//const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

/* function generateJWT(user) {
  const tokenData = { username: user.username, id: user.id };
  return jwt.sign({ user: tokenData }, config.authentication.jwtSecret) //todo: change to process.env.jwt
} */

function jwtRegUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, { expiresIn: ONE_WEEK }) 
  //todo: change to process.env.jwt
}

async function HashPassword(password) {
  const SALT_ROUNDS = 10;
  const SALT = await bcrypt.genSalt(SALT_ROUNDS); 
  hashedPassword = await bcrypt.hash(password, SALT);
  return hashedPassword;
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
   //or res.redirect('/login')
  },  //registerUser end




  async login(req, res) {
    console.log(req.body)
    const errors = validationResult(req); //check validation

    for(property in errors) {
      console.log(errors[property])
    }

    if(errors.isEmpty()){
      try {
        const { email, password } = req.body;
        
        //check if there is user with this email in db
        const user = await User.findOne({
          where: {
            email: email
          }
        })

        if(!user) {
          return res.status(403).send({
            error: 'Invalid login/email information'
          })
        } else { 

        //if user exists check if password matches
        const isPasswordValid = bcrypt.compare(password, user.password);

        console.log(' ')
        console.log('AUTH LOGIN FUNCTION')
        console.log(password)
        console.log(user.password)
        console.log(isPasswordValid)

        console.log(' ')


        if (!isPasswordValid) {
          return res.status(403).send({
            error: 'Invalid password'
          })
        } else {

        const userJson = user.toJSON();

          return res.status(200).send({
            user: userJson,
            token: jwtRegUser(userJson)
          })
        }
      } //else
      
      } catch(err) { 
        res.status(500).send({
          error: err
        })
      } //catch end
    } else { //errors is empty else
      res.status(422).send({
        error: errors
      })
    } //errors is empty else end
  }, //login end

  async getUserData(req, res) {
    try {
      return res.status(200).send({
        message: 'User data!'
      })
    } catch(err) {
      return res.status(500).send( {
        error: err
      })
    }

  } //getUserData end
 

} //module exports end