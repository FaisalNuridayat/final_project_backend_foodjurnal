'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nutrisi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Food, {
        as: 'food',
        foreignKey: 'nutrisi_id'
      })
    }
  }
  Nutrisi.init({
    name: DataTypes.STRING,
    kalori: DataTypes.STRING,
    protein: DataTypes.STRING,
    lemak: DataTypes.STRING,
    karbohidrat: DataTypes.STRING,
    serat: DataTypes.STRING,
    vitamin: DataTypes.STRING,
    gula: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nutrisi',
  });
  return Nutrisi;
};