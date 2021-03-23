
const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config');
//const { validationResult } = require('express-validator');
const expressValidator = require('express-validator');
const bcrypt = require('bcryptjs');
const loginHelper = require('../helpers/loginHelper')

function jwtRegUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, { expiresIn: ONE_WEEK }) 
}


module.exports = {
   async registerUser(req, res) {
    const errors = expressValidator.validationResult(req);
   
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
    //console.log(req.body)
    const errors = expressValidator.validationResult(req)

  /*   for(property in errors) {
      console.log(errors[property])
    } */

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
            return

          } else {
            res.status(403).send()
            return
          }   
        } //else
      
      } catch(err) { 
        console.log(err)
        res.status(500).send({
          error: err
        })
        return err
      } //catch end

    } else { //errors is empty else
      res.status(422).send({
        error: errors
      })
      return errors
    } //errors is empty else end
  }, //login end



 

} //module exports end