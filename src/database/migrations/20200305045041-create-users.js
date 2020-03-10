'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true, 
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      admin:{
        type:Sequelize.BOOLEAN,
        allowNull: false
      },
      password_hash: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull: true,
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull: true,
      }

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
