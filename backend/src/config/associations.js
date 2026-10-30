const sequelize = require('./db');
const Product = require('../modules/products/product.model');
const Sale = require('../modules/sales/sale.model');
const SaleProduct = require('../modules/sales/saleProduct.model');
const Admin = require('../modules/admins/admin.model');

//N:M Sale & Product

Sale.belongsToMany(Product, {
    through: SaleProduct,
    foreignKey: 'saleId',
    otherKey: 'productId',
    as: 'products',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Product.belongsToMany(Sale, {
    through: SaleProduct,
    foreignKey: 'productId',
    otherKey: 'saleId',
    as: 'sales',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});

const syncDatabase = async () => {
    try {
        await sequelize.sync();
    } catch (error) {
        console.error("Error in database tables:", error);
    }
};
syncDatabase();



module.exports = {
    sequelize,
    Product,
    Sale,
    SaleProduct,
    Admin
};