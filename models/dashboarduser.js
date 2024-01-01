'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class dashboarduser extends Model {
    static associate(models) {
      dashboarduser.belongsTo(models.Cadastro, { foreignKey: 'cadastroId' });
    }
  }

  dashboarduser.init({
    nome: DataTypes.STRING,
    numRegistro: DataTypes.STRING,
    cargo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dashboarduser',
  });

  return dashboarduser;
};
