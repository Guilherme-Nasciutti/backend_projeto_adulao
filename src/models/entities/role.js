const { DataTypes } = require('sequelize');
const connection = require('../connection');

const Role = connection.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(220),
    allowNull: false,
  },
  type: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'roles',
  timestamps: false,
});

module.exports = Role;
