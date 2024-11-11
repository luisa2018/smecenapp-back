const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('smecenapp', 'user', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

module.exports = sequelize;