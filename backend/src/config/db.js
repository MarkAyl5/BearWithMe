const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mysql://root:tumo@localhost:3306/BearWithMe");

module.exports = sequelize;