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

      console.log('AUTHCONTROLLER - data on server:')
      console.log(`First Name ${req.body.firstName}`);
      console.log(`Last Name ${req.body.lastName}`);
      console.log(`E-mail ${req.body.eMail}`);
      console.log(`Password ${req.body.password}`);

    /*   const createdUser = await User.create({
        firstName: 'Jan',
        lastName: 'Kowalski',
        eMail: 'test@on.pl',
        password:'admin1'
      }); */
/* 
      const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        eMail: req.body.eMail,
        password: req.body.password
      } */

      const user = {
        email: req.body.eMail,
        password: req.body.password
      }

      const createdUser = await User.create(user);
      const userJson = createdUser.toJSON();

      //todo: update user data (?) https://sequelize.org/master/manual/model-instances.html

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