
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
    jwtSecret: 'secret'
  }
}
//process.env.JWT_SECRET ||