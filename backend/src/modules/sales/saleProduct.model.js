const { DataTypes, DECIMAL } = require("sequelize");
const sequelize = require("../../config/db");

const SaleProduct = sequelize.define(
    "SaleProduct",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        unitaryPrice: {
            type: DECIMAL(10, 2),
            allowNull: false,
        }
    }, 
    {
        tableName: "sale_products",
        timestamps: false,
    }
);

module.exports = SaleProduct;
