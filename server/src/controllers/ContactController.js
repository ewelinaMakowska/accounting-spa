//const { Op } = require('sequelize');
//const { City } = require('../models/');


module.exports = {


async mailCompany (req, res, next) {
  res.send(req.body);
  console.log(`E-mail data:' ${req.body}`);
}
}