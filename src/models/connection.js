const { Sequelize } = require('sequelize');

const connection = new Sequelize('projeto_adulao', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;
