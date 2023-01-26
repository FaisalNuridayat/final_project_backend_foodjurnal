'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Recipe, {
        as: 'recipe',
        foreignKey: 'category_id'
      })
      this.hasMany(models.Food, {
        as: 'food',
        foreignKey: 'category_id'
        
      })
    }
    
  }
  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};