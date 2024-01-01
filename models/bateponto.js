'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bateponto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bateponto.init({
    horaAtual: DataTypes.STRING,
    horaPonto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bateponto',
  });
  return bateponto;
};