'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('dashboardusers', 'cadastroId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Cadastros',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('dashboardusers', 'cadastroId');
  },
};
