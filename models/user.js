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
    encryptedPassword: DataTypes.TEXT,
    status: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false,
    },
  }, {
    hooks: {
      afterValidate: (user) => {
        user.encryptedPassword = bcrypt.hashSync(user.encryptedPassword, 8)
      },
    },
  });

  User.prototype.verifyPass = function(pass) {
    return bcrypt.compareSync(pass, this.encryptedPassword);
  };

  User.associate = function(models) {
    User.hasMany(models.Post, {foreignKey: 'user_id'})
  };
  return User;
};
