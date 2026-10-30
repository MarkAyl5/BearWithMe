const { DataTypes, DECIMAL } = require("sequelize");
const sequelize = require("../../config/db");

const Sale = sequelize.define(
    "Sale",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customerName: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        total: {
            type: DECIMAL(10, 2),
            allowNull: false,
        }
    },
);

module.exports = Sale;
