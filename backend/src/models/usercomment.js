'use strict';
module.exports = (sequelize, DataTypes) => {
  var userComment = sequelize.define('userComment', {
    idUser: DataTypes.INTEGER,
    idRecipe: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userComment;
};