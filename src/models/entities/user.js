const { DataTypes } = require('sequelize');
const connection = require('../connection');
const Person = require('./person');

const User = connection.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  full_name: {
    type: DataTypes.STRING(220),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(220),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(180),
    allowNull: false,
  },
  password_reset_token: {
    type: DataTypes.STRING(180),
    allowNull: true,
  }
}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = User;
