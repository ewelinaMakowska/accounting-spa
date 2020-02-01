
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {

  // const Company = sequelize.define('Company', {
  //   id: DataTypes.INTEGER(10), primaryKey = 'true',
  //   name: DataTypes.STRING(45),
  //   price: DataTypes.DOUBLE(5,2),
  //   logo: DataTypes.STRING(45),
  //   description: DataTypes.TEXT()
  // })

  const Company = sequelize.define('Company', {
    id: { type: Sequelize.INTEGER(10), primaryKey : true, allowNull : false, unique : true, unsigned: true },
    name: { type: Sequelize.STRING(45), allowNull : false, },
    price: { type: Sequelize.DOUBLE(5,2),  allowNull : false },
    logo: { type: Sequelize.STRING(45) },
    description: { type: Sequelize.TEXT }
    
  })

  return Company
}

// id name price logo description
// int(10) unsigned not null primary key autogenerate unigue,
// varchar(45) not null
//double(5,2) not null unsigned
//logo varchar(45)
//description text