const Sequelize = require('sequelize');
const User = require('../models/user')
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config.json')[env]

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config
)

db.sequelize = sequelize;

module.exports = db;