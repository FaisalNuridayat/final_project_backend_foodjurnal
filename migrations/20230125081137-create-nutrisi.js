'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nutrisis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      kalori: {
        type: Sequelize.STRING
      },
      protein: {
        type: Sequelize.STRING
      },
      lemak: {
        type: Sequelize.STRING
      },
      karbohidrat: {
        type: Sequelize.STRING
      },
      serat: {
        type: Sequelize.STRING
      },
      vitamin: {
        type: Sequelize.STRING
      },
      gula: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Nutrisis');
  }
};