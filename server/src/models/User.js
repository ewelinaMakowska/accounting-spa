
const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    firstName: { type: DataTypes.STRING(45), allowNull : false },
    lastName: { type: DataTypes.STRING(45), allowNull : false },
    eMail: { type: DataTypes.STRING(45), allowNull : false, unique: true },
    password: { type: DataTypes.STRING(90), allowNull: false },
    type: { type: DataTypes.STRING(45), allowNull: false },
    ID: { type: DataTypes.INTEGER(10), primaryKey : true, allowNull : false, unique : true, unsigned: true, autoIncrement: true }
  },  {
    freezeTableName: false, // Model tableName will be the same as the model name
    timestamps: false,
    underscored: true
  })

  return User
}
