const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

sequelize
.authenticate()
.then(() => {
    console.log('Connected to database...')
})
.catch(err => {
    console.log('Unable to connect to database ', err)
})

db['Company'] = sequelize.import('./company.js')
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db