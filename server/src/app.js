const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const CompaniesController = require('./controllers/CompaniesController')
const CitiesController = require('./controllers/CitiesController');
const ContactController = require('./controllers/ContactController');
const { check, body } = require('express-validator/check')


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
      //.isAlphanumeric()
      .isLength({min: 3, max: 400})
      .trim(),
  ],
  ContactController.mailCompany)


sequelize.sync()
.then(() => {
  app.listen(port, () => console.log(`Your app is listening on port: ${port}`));
})
//app.get('/', () => { console.log('HEYEYEYEYA') });