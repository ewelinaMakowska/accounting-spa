const isAuth = require('../src/middleware/is-auth')

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
})