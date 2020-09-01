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

const app = express()
const port = 3306

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())

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

app.post('/email', 
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid e-mail')
      .custom((value, { req }) => {  /* custom validator to check if mail is verified */
        if ((value.toLowerCase() !== 'client_first@interia.pl') && (value.toLowerCase() !== 'client_second@interia.pl')) {
          throw new Error("This e-mail address is not verified by MailGun");
        }
        return true;
      })
      .withMessage('Message')
      .normalizeEmail(), //partially 'blocked' by custom validator
    body('name', 'Please enter a valid name')
      .isAlphanumeric()
      .isLength({min: 2, max: 25})
      .trim(),
    body('message', 'Please enter a valid message')
      .isLength({min: 3, max: 400})
      .trim(),
  ],
  ContactController.mailCompany)



/* app.post('/register', [
  body('eMail')
    .isEmail()
    .withMessage('Please enter a valid e-mail')
    .normalizeEmail(),
  body('firstName', 'Please enter a valid name')
    .isAlpha()
    .isLength({min:2, max: 25})
    .trim(),
  body('lastName', 'Please enter a valid last name')
    .isAlpha()
    .isLength({min:2, max: 25})
    .trim(),
  checkSchema(Password),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords have to match')
    } else {
      return true;
    }
  })
], AuthController.registerUser) */


app.post('/register', AuthControllerPolicy.registerUser, AuthController.registerUser)




sequelize.sync()
.then(() => {
  app.listen(port, () => console.log(`Your app is listening on port: ${port}`));
})
//app.get('/', () => { console.log('HEYEYEYEYA') });