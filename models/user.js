'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    encrypPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false,
    },
  }, {
    setterMethod: {
      password: (encrypPassword) => {
        const salt = bcrypt.genSaltSync(8)
        const hash = bcrypt.hashSync(encrypPassword, salt)
        this.setDataValue('encryptPassword', hash);
      },
    },
  });

  User.prototype.verifyPass = function(pass) {
    return bcrypt.compareSync(pass, this.encrypPassword);
  };

  User.associate = function(models) {
    User.hasMany(models.Post, {foreignKey: 'user_id'})
  };
  return User;
};
