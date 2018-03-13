'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    author: DataTypes.INTEGER,
    text: DataTypes.TEXT,
  }, {});
  Post.associate = function(models) {
    Todo.belongsTo(models.User);
  };
  return Post;
};
