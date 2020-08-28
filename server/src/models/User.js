
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

async function HashPassword(user) {
  const SALT_ROUNDS = 10;
  const SALT = await bcrypt.genSalt(SALT_ROUNDS); 
  user.password = await bcrypt.hash(user.password, SALT);
}

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {

    firstname: {
       type: DataTypes.STRING(45)
    },

    lastname: { 
      type: DataTypes.STRING(45)
    },

    email: { 
      type: DataTypes.STRING(45), 
      unique: true,
      allowNull: false 
    },

    password: { 
      type: DataTypes.STRING(90),
      allowNull: false 
    },

    type: { 
      type: DataTypes.STRING(45), 
      defaultValue: 'user' 
    }, 

    id: { 
      type: DataTypes.INTEGER(10), 
      primaryKey : true, 
      unique : true, 
      unsigned: true, 
      autoIncrement: true,
      allowNull: false 
    }
  },  
  {
    freezeTableName: false, // Model tableName will be the same as the model name
    timestamps: false,
    underscored: true,
    hooks: {
      beforeCreate: HashPassword,
      beforeUpdate: HashPassword,
      beforeSave: HashPassword
    }
  })

  return User
}
