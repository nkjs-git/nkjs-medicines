const { Sequelize } = require("sequelize");
const { ItemsModel } = require('../models');
const config = require('../config')

const sequelize = new Sequelize(
  config.SQL_CONFIG
);

const db = {};
db.Items = ItemsModel(sequelize);
db.sequelize = sequelize;
// sync all models with database
sequelize.sync({ alter: true });

module.exports = db;