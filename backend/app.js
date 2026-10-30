const express = require('express');
const cors = require('cors');


require('dotenv').config();

//db connection
// const sequelize = require('./src/config/db'); 
const associations = require('./src/config/associations');

// routes
const productRoutes = require('./src/modules/products/product.routes');
const saleRoutes = require('./src/modules/sales/sale.routes');
const adminRoutes = require('./src/modules/admins/admin.routes');

const app = express();

// global middlewares 
app.use(cors());
app.use(express.json());

// Multer (static files)
app.use("/public", express.static("public"));
app.use("/images", express.static("img"));

const PORT = process.env.PORT;

app.use('/products', productRoutes);
app.use('/sales', saleRoutes);
app.use('/admins', adminRoutes);

app.listen(PORT, () => {
    console.log(`Server is running correctly on port ${PORT}`);
});

