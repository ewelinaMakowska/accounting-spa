const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
//const history = require('connect-history-api-fallback');
const { sequelize } = require('./models')
const CompaniesController = require('./controllers/CompaniesController')
const CitiesController = require('./controllers/CitiesController');
const ContactController = require('./controllers/ContactController');
const AuthController = require('./controllers/AuthController');
const { check, checkSchema, body } = require('express-validator');

const AuthControllerPolicy = require('./policies/AuthControllerPolicy');
const ContactControllerPolicy = require('./policies/ContactControllerPolicy');
const CompaniesControllerPolicy = require('./policies/CompaniesControllerPolicy');


const isAuth = require('./middleware/is-auth')

const app = express()
const port = 3306

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())
app.use((req, res, next) => {
/*   res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  ); */
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next()
})



app.get('/', (req, res) => res.send('HEYEYEYEYA'))

/* app.use(history({
  index: '/index.html' 
})); if uncommented npm install --save connect-history-api-fallback */

app.get('/companies', CompaniesController.get)
app.get('/companiesLimited', CompaniesController.getLimited)
app.get('/companiesFiltered', CompaniesController.getFiltered)
app.get('/companiesFilteredLimited', CompaniesController.getFilteredLimited)
//app.get('/companiesLimited/?page=:page', CompaniesController.getLimited)
app.get('/companiesFirst', CompaniesController.getFirstLimited)
// app.get('/companiesCountAll', CompaniesController.countAll)
//app.get('/companies/:id', CompaniesController.getOne)
app.get('/company/:id', CompaniesController.getOne)
//app.get('/companies/:id', (req, res) => CompaniesController.getOne)
//app.get('/companies/:id', CompaniesController.getOne)
app.get('/cities', CitiesController.getCities)
app.get('/citiesFilteredLimited', CitiesController.getCitiesFilteredLimited)
app.get('/userProfile', isAuth, AuthController.getUserData)

app.post('/email', ContactControllerPolicy.email, ContactController.mailCompany)
app.post('/register', AuthControllerPolicy.registerUser, AuthController.registerUser)
app.post('/login',  AuthControllerPolicy.loginUser, AuthController.login)

app.get('/editContent', CompaniesControllerPolicy.search, CompaniesController.getByNameOrID)


sequelize.sync()
.then(() => {
  app.listen(port, () => console.log(`Your app is listening on port: ${port}`));
})
//app.get('/', () => { console.log('HEYEYEYEYA') });