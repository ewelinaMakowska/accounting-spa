const { Company, sequelize } = require('../models/')
const { City } = require('../models/')
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



    /* async getFilteredLimited(req, res, next) {
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
       
        companies = await Company.findAndCountAll({
          offset: (page-1) * ITEMS_PER_PAGE,
          order: order,
          limit: ITEMS_PER_PAGE,
          where: {cityId : value}
        })
          
        res.send(companies);
     
      } catch (error) {
        res.status(500).send({
          error: 'Internal Server Error'
        });
      } 
    }, */


  /*   

    EAGER LOADING
  
    async getFilteredLimited(req, res, next) {
      console.log(req.query);
     try {
      const page = req.query.page;
      const value = req.query.city;
      const sort = req.query.sort;
      let order;
      let companies;
      //let cities;

      if(sort == null) {
       order = [['id', 'asc']]
      } else if(sort == 'price_asc') {
       order = [['price', 'asc']];
      } else if(sort == 'price_desc') {
       order = [['price', 'desc']];
      }
      
       companies = await Company.findAndCountAll(
         { 
        attributes: ['name'],
         offset: (page-1) * ITEMS_PER_PAGE,
         order: order,
         limit: ITEMS_PER_PAGE,
         where: {cityId: value},
         include:[
          { model: City, 
            attributes: ['name'],
            where: { id: value },   
            required: false //left join
            }
          ]
       })
         
       res.send(companies);
    
     } catch (error) {
      console.log(error);
       res.status(500).send({
         error: 'Internal Server Error'
       });
       
     } 
   },  */


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
    
     companies = await sequelize.query('select companies.id, companies.name, companies.description, companies.logo, companies.price, companies.email, cities.name from companies left join cities on cities.id = companies.cityid where companies.cityid = '+value+' limit '+ITEMS_PER_PAGE+' offset '+page, {
      model: Company,
      mapToModel: true // pass true here if you have any mapped fields
    },
   )
       
     res.send(companies);
  
   } catch (error) {
     console.log(error)
     res.status(500).send({
       error: 'Internal Server Error'
     });
   } 
 }, 





        
 


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