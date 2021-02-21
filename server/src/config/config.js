require('dotenv').config();
const bodyParser = require("body-parser");
const mysql2 = require("mysql2");

module.exports = {
  
  //todo: add env variables

  "development": {
    port: process.env.PORT,
    db: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      options: {
        dialects: process.env.DB_DIALECTS,
        host: process.env.DB_HOST,
        operatorsAliases: process.env.DB_OPERATOR_ALIASES
    }
    },
    authentication: {
      jwtSecret: process.env.AUTH_JWT_SECRET
    }
  }
  
}

