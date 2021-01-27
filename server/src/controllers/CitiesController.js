const { Op } = require('sequelize');
const { City } = require('../models/');
const CITIES_ON_AUTOCOMPLETE = 5;

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
},

async getCitiesFilteredLimited(req, res, next) {
  try {
    const value = req.query.name;

    const cities = await City.findAndCountAll({
      offset: 0,
      limit: CITIES_ON_AUTOCOMPLETE,
      where: {[Op.or]: [{name: {[Op.like]: `${value}%`}}] //op or
      }
    })
      
    res.send(cities);
 
  } catch (error) {
    res.status(500).send({
      error: 'Internal Server Error'
    });
  } 
} 


}