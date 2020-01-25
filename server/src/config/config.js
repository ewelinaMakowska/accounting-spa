const myqsl = require('mysql2');

module.exports = {
    port: 3000,
    db: {
        database: process.env.DB_NAME || 'accounting_companies',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'A5@@nbd',
        options: {
            dialect: process.env.DB_DIALECT || 'mysql',
            host: process.env.DB_HOST || 'localhost',
            operatorsAliases: false,
            storage: './accounting_companies.sqlcd'
        }
    }
}