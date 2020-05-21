
const { Op } = require('sequelize');
const { City } = require('../models/');

module.exports = {


async getCities (req, res) {
  try {
    const cities = await City.findAndCountAll({
      offset: 0,
      limit: 150
    })
    res.send(cities)
  } catch (error) {
    res.status(500).send({
      error: 'Internal Server Error'
    });
  }
}

}