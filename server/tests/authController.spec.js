const AuthController = require('../src/controllers/AuthController')
const bcrypt = require('bcryptjs');
jest.mock('express-validator');
const expressValidator = require('express-validator');
const sequelize = require('sequelize')
const models = require('../src/models');



describe('if validation errors', () => {
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


})