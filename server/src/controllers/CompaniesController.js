const { Company } = require('../models')
const ITEMS_PER_PAGE = 4;

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

  // async countAll (req, res) {
  //   try {
  //     const howManyRows = await Company.count();
  //     res.send(howManyRows)
  //   } catch (error) {
  //     res.status(500).send({
  //       error: 'Internal Server Error'
  //     });
  //   }
  // },

  async getFirstLimited (req, res) {
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
  },

  
  async getLimited (req, res, next) {
    try {
       const page = req.query.page;
       //const page = '3';
       //const page = 3;   
     
      const companies = await Company.findAndCountAll({
        offset: (page-1) * ITEMS_PER_PAGE,
        limit: ITEMS_PER_PAGE
      })
      res.send(companies);
      //res.send(`ejerfhksjhf: ${req.query.page}`)
   
    } catch (error) {
      res.status(500).send({
        error: 'Internal Server Error'
      });
    }
 
  },

  async getOne (req, res, next) {
    try {
      const companies = await Company.findByPk(req.params.id)
      res.send(companies)
    } catch (error) {
      res.status(500).send({
        error: 'Internal Server Error'
      });
    }
  }

  // async getLimited (req, res, next) {
  //   try {
  
  //     const companies = await Company.findAndCountAll({
  //       offset: 4,
  //       limit: 4
  //     })
  //     res.send(companies)
  //   } catch (error) {
  //     res.status(500).send({
  //       error: 'Internal Server Error'
  //     });
  //   }
  // }
 
}