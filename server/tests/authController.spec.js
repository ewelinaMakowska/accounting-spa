const AuthController = require('../src/controllers/AuthController')
const bcrypt = require('bcryptjs');
const expressValidator = require('express-validator');
const sequelize = require('sequelize')
const models = require('../src/models');
const loginHelper = require('../src/helpers/loginHelper')
const authHelper = require('../src/helpers/authHelper');

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



  test("if validation passes and user password is not valid", (done) => {
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
      const user = {}
      return user;
    })

    const mockCompareSync = jest
    .spyOn(bcrypt, "compareSync")
    .mockImplementation(() => {
      return false;
    })

    AuthController.login(req, res)
    .then(() => {
      expect(res.status).toHaveBeenCalledWith(403)

      expressValidator.validationResult.mockRestore()
      mockCompareSync.mockRestore()
      mockGetUserData.mockRestore()
      mockCompareSync.mockRestore()
      done()
    })
  })



  test("if validation passes and user data is valid", (done) => {
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
        return this
      })
    };

    const mockGetUserData = jest
    .spyOn(loginHelper, "getUserData")
    .mockImplementation(() => {
      const user = {
        email: 'example@email.com',
        password: '_2examplePassword88'
      }
      return user;
    })

    const mockCompareSync = jest
    .spyOn(bcrypt, "compareSync")
    .mockImplementation(() => {
      return true;
    })
    
    AuthController.login(req, res)
    .then(() => {
      try {
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.status().send).toHaveBeenCalled()

        mockGetUserData.mockRestore()
        mockCompareSync.mockRestore()
        res.status().send.mockRestore()
        res.status.mockRestore()

        done()
      } catch(err) {
        console.log(err)
        done(err)
      }
    })
  }),


  describe('register tests', () => {

  })




})