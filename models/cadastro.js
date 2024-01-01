'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cadastro extends Model {
    static associate(models) {
      Cadastro.hasMany(models.dashboarduser, { foreignKey: 'cadastroId' });
      Cadastro.hasOne(models.User);
    }
  }

  Cadastro.init({
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    numRegistro: DataTypes.STRING,
    cargo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cadastro',
  });

  return Cadastro;
};
