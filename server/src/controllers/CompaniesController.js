const { Company } = require('../models')

module.exports = {

  async get (req, res) {
    try {
      const companies = await Company.findAndCountAll({
        offset: 0,
        limit: 150
      })
      res.send(companies)
    } catch (error) {
      res.status(500).send({
        error: 'Internal Server Error'
      });
    }
  },

  async getLimited (req, res) {
    try {
      const companies = await Company.findAndCountAll({
        offset: 0,
        limit: 4
      })
      res.send(companies)
    } catch (error) {
      res.status(500).send({
        error: 'Internal Server Error'
      });
    }
  }


 
}