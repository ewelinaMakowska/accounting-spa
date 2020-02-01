
module.exports = {
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
  }
}