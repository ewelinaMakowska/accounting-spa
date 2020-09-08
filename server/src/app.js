const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const CompaniesController = require('./controllers/CompaniesController')
const CitiesController = require('./controllers/CitiesController');
const ContactController = require('./controllers/ContactController');
const AuthController = require('./controllers/AuthController');
const { check, checkSchema, body } = require('express-validator');

const AuthControllerPolicy = require('./policies/AuthControllerPolicy');
const ContactControllerPolicy = require('./policies/ContactControllerPolicy');

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


/* function authenticateToken(req, res, next) {
  const authHeader = req.header['authorization'];
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(401)

  jwt.verify(token, accessToken, (err, user) => {
    if(err) return res.sendStatus(403);
    req.user = user;
    next();
  })
} */

//app.get('/userProfile', authenticateToken, AuthController.getUserData)

app.post('/email', ContactControllerPolicy.email, ContactController.mailCompany)
app.post('/register', AuthControllerPolicy.registerUser, AuthController.registerUser)
app.post('/login', AuthController.login)

sequelize.sync()
.then(() => {
  app.listen(port, () => console.log(`Your app is listening on port: ${port}`));
})
//app.get('/', () => { console.log('HEYEYEYEYA') });