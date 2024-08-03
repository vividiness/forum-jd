const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('forumjd', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
