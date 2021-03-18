const dotenv = require('dotenv').config({path: '../.env'});

module.exports = { 
  port: process.env.PORT,
  db: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
      dialect: process.env.DB_DIALECT,
      host: process.env.HOST,
      operatorsAliases: process.env.DB_OPERATOR_ALIASES
    }
  },
  authentication: {
    jwtSecret: process.env.AUTH_JWT_SECRET
  }

}