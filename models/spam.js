const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Spam = sequelize.define('Spam', {
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    }
  }
});

module.exports = Spam;
