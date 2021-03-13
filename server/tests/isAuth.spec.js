const isAuth = require('../src/middleware/is-auth')

test('if malformed or no token it should throw an error', () => {
  const req = {
    get: () => {
      return 'Authorization wrongToken'
    }
  }

  expect(() => {isAuth(req, () => {})}).toThrow(Error)
})