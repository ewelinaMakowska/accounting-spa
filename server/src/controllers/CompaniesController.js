const { Company } = require('../models')

module.exports = {

  async get (req, res) {
    try {
      const companies = await Company.findAll({
        limit: 2
      })
      res.send(companies)
    } catch (error) {
      res.status(500).send({
        error: 'Internal Server Error'
      });
    }
  }


 
}