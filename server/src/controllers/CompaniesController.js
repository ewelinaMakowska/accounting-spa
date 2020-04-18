const { Company } = require('../models')
const ITEMS_PER_PAGE = 4;
const { Op } = require('sequelize');

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

    async getFiltered(req, res, next) {
      try {
        const value = req.query.city;
        console.log(`Przekazana wartość do kontrolera: ${value}`)
         //const page = '3';
         //const page = 3;   
      
            const companies = await Company.findAll({
            where: {
              [Op.or]: [
                {city: {[Op.like]: `%${value}%`}}              
              ] //op or
            } // where
         
            }) //company find all
          
        res.send(companies);
     
      } catch (error) {
        res.status(500).send({
          error: 'Internal Server Error'
        });
      } 
    },

    async getFilteredLimited(req, res, next) {
      try {
        const value = req.query.city;
        console.log(`Przekazana wartość do kontrolera: ${value}`)
         //const page = '3';
         //const page = 3;   
      
            const companies = await Company.findAll({
            where: {
              [Op.or]: [
                {city: {[Op.like]: `%${value}%`}}              
              ] //op or
            } // where
         
            }) //company find all
          
        res.send(companies);
     
      } catch (error) {
        res.status(500).send({
          error: 'Internal Server Error'
        });
      } 
    },

    /*   Song.findAll({
    where: {
    $or: [
    {title: {$like: `%${search}%`}},
    {artist: {$like: `%${search}%`}},
    ...etc.]
    }}) */


/*   async getFiltered(req, res, next) {
    try {
      const value = req.query.city;
       //const page = '3';
       //const page = 3;   
        if (value) {
          const companies = await Company.findAll({
            where: {
              [Op.or]: [
                'city', 'name'
              ].map(key => ({
                [key]: {
                  [Op.like]: '%${value}%'
                }
               
              }))
            }
          })
        }
      res.send(companies);
      //res.send(`ejerfhksjhf: ${req.query.page}`)
   
    } catch (error) {
      res.status(500).send({
        error: 'Internal Server Error'
      });
    }
 
  }, */



  async getOne (req, res, next) {
    //const id = req.params.id;
    try {
      const id = req.params.id
      const companies = await Company.findByPk(id)
      
      //const companies = await Company.findByPk({ where: { id: id}});
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