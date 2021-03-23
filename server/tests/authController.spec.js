const AuthController = require('../src/controllers/AuthController')
const bcrypt = require('bcryptjs');
const expressValidator = require('express-validator');
const sequelize = require('sequelize')
const models = require('../src/models');
const loginHelper = require('../src/helpers/loginHelper')


jest.mock('express-validator');

describe('login tests', () => {
  beforeEach(() => {  
  })


  test("if login data are in wrong format it should throw 422 error", (done) => {  
    expressValidator.validationResult.mockImplementation(() => ({
      isEmpty: jest.fn().mockReturnValue(false),
      array: jest.fn().mockReturnValue([{ test: 'error' }])
    }));

    const res = {
      status: jest.fn(function(code) {
        return this
      }),
      send: jest.fn(function(Object) {
      })
    };

    AuthController.login({}, res)
    .then(() => {
      try {
        expect(res.status).toHaveBeenCalledWith(422)
        models.sequelize.sync()
        .then(() => { models.sequelize.close()})
        .then(() => {
          done()
        })
      } catch(err){
        done(err)
      }
    })    
  })


  test("if validation passes and user login is not valid", (done) => {
    expressValidator.validationResult.mockImplementation(() => ({
      isEmpty: jest.fn().mockReturnValue(true),
      array: jest.fn().mockReturnValue([])
    }));

    const req = {
      body: {
        email: 'example@email.com',
        password: '_2examplePassword88'
      }
    }

    const res = {
      status: jest.fn(function(code) {
        return this
      }),
      send: jest.fn(function(Object) {
      })
    };

    const mockGetUserData = jest
    .spyOn(loginHelper, "getUserData")
    .mockImplementation(() => {
      return null;
    })

    AuthController.login(req, res)
    .then(() => {
      expect(res.status).toHaveBeenCalledWith(403)
      done()
    })
  })

  


})