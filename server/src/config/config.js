const bodyParser = require("body-parser");

module.exports = { //todo: add env variables
  port: 3306,
  db: {
    database: 'accounting_companies',
    user: 'root',
    password: '',
    options: {
      dialect: 'mysql',
      host: 'localhost',
      operatorsAliases: false
    }
  },
  authentication: {
    jwtSecret: 'my-development-secret'
  }
}


/* function setDevEnv(app) {
  process.env.NODE_ENV = 'development';
  process.env.DB_URL = '';
  process.env.JWT_SECRET = 'my-secret';
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(cors());
} */