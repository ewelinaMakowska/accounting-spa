//const sendMail = require('../mail')
//const { validationResult } = require('express-validator/check')

const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config');
const { validationResult } = require('express-validator');
//const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const loginHelper = require('../helpers/loginHelper')

/* function generateJWT(user) {
  const tokenData = { username: user.username, id: user.id };
  return jwt.sign({ user: tokenData }, config.authentication.jwtSecret) //todo: change to process.env.jwt
} */

function jwtRegUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, { expiresIn: ONE_WEEK }) 
  //todo: change to process.env.jwt
}

/* async function HashPassword(password) {
  const SALT_ROUNDS = 9;
  const SALT = await bcrypt.genSalt(SALT_ROUNDS); 
  hashedPassword = await bcrypt.hash(password, SALT);
  return hashedPassword;
} */

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
        var user;

        //check if there is user with this email in db
        user = await loginHelper.getUserData(req);
        console.log(user)
        
        if(!user) {
          return res.status(403).send({
            error: 'Invalid login/email information'
          })
        } else { 
          //SYNC
          let isPasswordValid = bcrypt.compareSync(password, user.password)      

          
          if(isPasswordValid) {
            const userJson = user.toJSON();

            res.status(200).send({
              user : userJson,
              token: jwtRegUser(userJson)
            }) 

           // res.status(200).send()
          } else {
            res.status(403).send()
          }   
        } //else
      
      } catch(err) { 
        console.log(err)
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