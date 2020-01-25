// const Sequelize = require('sequelize')
// const mysql = require('mysql2');
// const config = require('../config/config') //pool
// const db = {}

// /* const sequelize = new Sequelize(
//     config.db.database,
//     config.db.user,
//     config.db.password,
// ) */

// const sequelize = new Sequelize('accounting_companies', 'accounting_app', 'A5@@nbd', {
//     host: 'localhost',
//     dialect: 'mysql',
  
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     },
//     // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
//     operatorsAliases: false
//   });

// sequelize
// .authenticate()
// .then(() => {
//     console.log('Connected to database...')
// })
// .catch(err => {
//     console.log('Unable to connect to database ', err)
// })

// db['Company'] = sequelize.import('./company.js')
// db.sequelize = sequelize
// db.Sequelize = Sequelize
// // config.execute('SELECT * FROM COMPANIES')
// module.exports = db