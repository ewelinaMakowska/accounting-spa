const isAuth = require('../src/middleware/is-auth')
jwt = require('jsonwebtoken')


test('if malformed or no token it should throw an error', () => {
  const req = {
    get: () => {
      return 'Authorization wrongToken'
    }
  }

  expect(() => {isAuth(req, () => {})}).toThrow(Error)
}),


test("if no auth header it should throw 'Not authenticated.", () => {
  const req = {
    get: () => {
      return null;
    }
  }

  expect(() => {isAuth(req, () => {})}).toThrow('Not authenticated.')
}),


test("it should provide role and email if token is valid", () => {
  const req = {
    get: () => {
      return 'Bearer validToken'
    }
  }

  jest
    .spyOn(jwt, "verify")
    .mockImplementation(() => {
      const decodedToken = {}
      return decodedToken;
    })

  isAuth(req, {}, () => {})

  expect(req).toHaveProperty('role')
  expect(req).toHaveProperty('email')
})