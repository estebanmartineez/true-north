const { Sequelize } = require('sequelize');
require('dotenv').config()

const db = new Sequelize( {
    database: process.env.DATABASE,
    username: 'root',
    password: process.env.PASSWORD,
    host: process.env.HOST,
    dialect: 'mysql',
    ssl: false,
    dialectOptions: {},
    logging: false,
});

module.exports = db;
