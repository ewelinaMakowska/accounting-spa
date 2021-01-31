const { Company, City, sequelize } = require('../models/')
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
       const sort = req.query.sort;
       let order;
       let companies;

       if(sort == null) {
        order = [['id', 'asc']]
       } else if(sort == 'price_asc') {
        order = [['price', 'asc']];
       } else if(sort == 'price_desc') {
        order = [['price', 'desc']];
       }
     
      companies = await Company.findAndCountAll({
        attributes: ['name', 'price', 'id'],
        order: order,
        offset: (page-1) * ITEMS_PER_PAGE,
        limit: ITEMS_PER_PAGE,
        include:[
          { model: City, 
            as: 'City',
            attributes: ['name', 'region'],
            required: false //left join
            }
          ]
      
      })
      res.send(companies);
   
    } catch (error) {
      console.log(error)
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

  //EAGER LOADING
  async getFilteredLimited(req, res, next) {
    console.log(req.query);
   try {
    const page = req.query.page;
    const value = req.query.city;
    const sort = req.query.sort;
    let order;
    let companies;

    if(sort == null) {
     order = [['id', 'asc']]
    } else if(sort == 'price_asc') {
     order = [['price', 'asc']];
    } else if(sort == 'price_desc') {
     order = [['price', 'desc']];
    }
    
     companies = await Company.findAndCountAll(
       { 
      attributes: ['name', 'id', 'price'],
       offset: (page-1) * ITEMS_PER_PAGE,
       order: order,
       limit: ITEMS_PER_PAGE,
       where: {cityId: value},
       include:[
        { model: City, 
          as: 'City',
          attributes: ['name', 'region'],
          //where: { id: value },   
          required: false //left join
          }
        ] 
     })

     console.log(companies)  

     res.send(companies);
  
   } catch (error) {
    console.log(error);
     res.status(500).send({
       error: 'Internal Server Error'
     });
     
   } 
 },   


  async getOne (req, res, next) {
    try {
      const id = req.params.id
      const companies = await Company.findOne({
        attributes: ['name', 'description', 'price', 'email', 'logo'],
        where: {id: id},
        include : [{
          attributes: ['name', 'region'],
          model: City,
          as: 'City',
          required: false //left join
        }
        ]
      })
      
      //const companies = await Company.findByPk({ where: { id: id}});
      res.send(companies)
    } catch (error) {
      console.log(error)
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