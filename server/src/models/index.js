const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}


const sequelize = new Sequelize (
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// const sequelize = new Sequelize('accounting_companies', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to database...')
  })
  .catch(err => {
    console.log('Unable to connect to database')
  })

  db.sequelize = sequelize
  db.Sequelize = Sequelize
  module.exports = db