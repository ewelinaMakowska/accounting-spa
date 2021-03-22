const AuthController = require('../src/controllers/AuthController')
const bcrypt = require('bcryptjs');
jest.mock('express-validator');
const expressValidator = require('express-validator');



describe('if validation errors', () => {
  beforeEach(() => {  
    expressValidator.validationResult.mockImplementation(() => ({
      isEmpty: jest.fn().mockReturnValue(false),
      array: jest.fn().mockReturnValue([{ test: 'error' }])
    }));
  })


  test("if login data are in wrong format it should throw 422 error", (done) => {  
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
        done()
        expect(res.status).toHaveBeenCalledWith(422) 
      } catch(err){
        done(err)
      }
    })    
  })


})