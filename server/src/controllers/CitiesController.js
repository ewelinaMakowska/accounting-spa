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
},

async addCity(req, res) {
  try {
    const newCity = await City.create({
      name: req.query.name,
      region: req.query.region
    })

    if(newCity) {
      res.status(200).send(newCity)
    }
  } catch(err) {
    console.log(err)
    res.status(500).send(err)
  }
}


}