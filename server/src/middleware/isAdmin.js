module.exports = (req, res, next) => {
 if(req.role === 'admin') {
  next();
 } else {
  res.status(401).send('Not authenticated.')
 }
}


/* test("it should throw 'Not authenticated.' error if user role is different than admin", () => {
  const req = {
    role: 'admin'
  }

  const res = {
    status: function(code) {
      this.statusCode = code;
      return this;
    },
    send: function(message) {
      return message;
    }
  }

  expect(() => {
    isAdmin(req, res, () => {}).toThrow('Not authenticated.')
  })
}), */