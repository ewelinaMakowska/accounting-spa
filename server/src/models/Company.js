
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {

  // const Company = sequelize.define('Company', {
  //   id: DataTypes.INTEGER(10),
  //   name: DataTypes.STRING(45),
  //   price: DataTypes.DOUBLE(5,2),
  //   logo: DataTypes.STRING(45),
  //   description: DataTypes.TEXT()
  // })

  // const Company = sequelize.define('Company', {
  //   id: {
  //       type: DataTypes.INTEGER(10),
  //       allowNull: false,
  //       primaryKey: true,
  //       autoIncrement: true
  //   },
  //   user_id: {
  //       type: DataTypes.INTEGER(11),
  //       allowNull: false,
  //   },
  //   count: {
  //       type: DataTypes.INTEGER(11),
  //       allowNull: true
  //   },
  //   name: {
  //       type: DataTypes.STRING,
  //       allowNull: true,
  //   })

  // const Company = sequelize.define('Company', {
  //   id: { type: Sequelize.INTEGER(10), primaryKey : true, allowNull : false, unique : true, unsigned: true, autoIncrement: true },
  //   name: { type: Sequelize.STRING(45), allowNull : false, },
  //   price: { type: Sequelize.DOUBLE(5,2),  allowNull : false },
  //   logo: { type: Sequelize.STRING(45) },
  //   description: { type: Sequelize.TEXT }
    
  // })

  const Company = sequelize.define('Company', {
    id: { type: DataTypes.INTEGER(10), primaryKey : true, allowNull : false, unique : true, unsigned: true, autoIncrement: true },
    name: { type: DataTypes.STRING(45), allowNull : false },
    city: { type: DataTypes.STRING(45), allowNull : false },
    cityid: { type: DataTypes.INTEGER(10), allowNull : false },
    price: { type: DataTypes.DOUBLE(5,2),  allowNull : false },
    logo: { type: DataTypes.STRING(45) },
    description: { type: DataTypes.TEXT },
    email: { type: DataTypes.STRING(45) }  
  },  {
    freezeTableName: false, // Model tableName will be the same as the model name
    timestamps: false,
    underscored: true
  })

  return Company
}

// id name price logo description
// int(10) unsigned not null primary key autogenerate unigue,
// varchar(45) not null
//double(5,2) not null unsigned
//logo varchar(45)
//description text