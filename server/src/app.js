const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const CompaniesController = require('./controllers/CompaniesController')

const app = express()
const port = 3306

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => res.send('HEYEYEYEYA'))

app.get('/companies', CompaniesController.get)
app.get('/companiesLimited', CompaniesController.getLimited)
app.get('/companiesFirst', CompaniesController.getFirstLimited)
// app.get('/companiesCountAll', CompaniesController.countAll)
app.get('/companies/:id', CompaniesController.getOne)
//app.get('/companies/:id', (req, res) => CompaniesController.getOne)

sequelize.sync()
.then(() => {
  app.listen(port, () => console.log(`Your app is listening on port: ${port}`));
})
//app.get('/', () => { console.log('HEYEYEYEYA') });