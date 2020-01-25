const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const CompaniesController = require('./controller/CompaniesController')

const app = express()
const port = 3000

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

sequelize.sync().
    then( () => {
    app.listen(port, () => console.log(`App is listening on port: ${port} `))
    })

app.get('/', (req, res) =>  res.send("HELLO!"))  
app.get('/companies', CompaniesController.get)