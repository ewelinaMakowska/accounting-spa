
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {


  const City = sequelize.define('City', {
    id: { type: DataTypes.INTEGER(10), primaryKey : true, allowNull : false, unique : true, unsigned: true, autoIncrement: true },
    name: { type: DataTypes.STRING(45), allowNull : false, },
    region: { type: DataTypes.STRING(45), allowNull : false, },
  },  {
    freezeTableName: false, // Model tableName will be the same as the model name
    timestamps: false,
    underscored: true
  })

  return City
}

