const { DataTypes } = require('sequelize');
const connection = require('../connection');
const Role = require('./role');

const Person = connection.define('Person', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING(220),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(220),
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  civil_status: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  education: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: 'id',
    },
  },
}, {
  tableName: 'persons',
  timestamps: false,
});

Person.belongsTo(Role, { foreignKey: 'role_id' });

module.exports = Person;
