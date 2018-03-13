'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    author: DataTypes.INTEGER,
    text: DataTypes.TEXT,
  });
  Post.associate = function(models) {
    Post.belongsTo(models.User);
  };
  return Post;
};
