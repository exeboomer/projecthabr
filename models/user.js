'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.TEXT,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Post);
  };
  return User;
};
