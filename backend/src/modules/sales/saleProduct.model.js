const { DataTypes, DECIMAL } = require("sequelize");
const sequelize = require("../../config/db");

const SaleProduct = sequelize.define(
    "Sale",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        saleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        unitaryPrice: {
            type: DECIMAL(10, 2),
            allowNull: false,
        }
    }, 
);

module.exports = SaleProduct;
