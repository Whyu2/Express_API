'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('posts', { 
    id: {
      type: sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    nama: {
    type: sequelize.STRING,
    allowNull :false,
    },
    jenis: {
      type: Sequelize.STRING,
      allowNull :false,
    },
    informasi: {
      type: Sequelize.TEXT,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull :false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull :false,
    }
  });
  

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('posts');
  }
};
