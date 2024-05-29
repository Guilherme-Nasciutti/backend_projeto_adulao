const { DataTypes } = require('sequelize');
const connection = require('../connection');
const Person = require('./person');

const Activity = connection.define('Activity', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(220),
    allowNull: false,
  },
  initial_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  final_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  person_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Person,
      key: 'id',
    },
  },
}, {
  tableName: 'activities',
  timestamps: false,
});

Activity.belongsTo(Person, { foreignKey: 'person_id' });

module.exports = Activity;
