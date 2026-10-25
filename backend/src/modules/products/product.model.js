const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db.js');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(300),
        allowNull: true
    },
    category: {
        type: DataTypes.ENUM('Plushie', 'Accessory', 'Clothing'),
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }

}, {
    tableName: 'products',
    timestamps: true,
    paranoid: true
}
);

module.exports = Product;