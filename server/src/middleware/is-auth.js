const jwt = require('jsonwebtoken');

module.exports = (req, next) => {
  const token = req.get('Authorization').split(' ')[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, 'myDevelopmentSuperSecret');
    req.role = decodedToken.role;
  } catch(error) {
    error.statusCode = 500;
    throw error
  }

  if(!decodedToken) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }

  req.email = decodedToken.email;
  next();
}