const sequelize = require("./db");
require("./associations");

const Product = require("../modules/products/product.model")
const Admin = require("../modules/admins/admin.model");

const products = [
  // Plushie (6)
    { name: 'Capybara', price: 20000, description: 'Peluche suave de 30 cm, ideal para abrazar.', category: 'Plushie', imageUrl: 'capybara.jpg', isActive: true },
    { name: 'Oso Panda', price: 18000, description: 'Panda de felpa con ojitos bordados.', category: 'Plushie', imageUrl: 'panda.jpg', isActive: true },
    { name: 'Conejo Rosa', price: 15000, description: 'Conejito de orejas largas y pelaje ultra suave.', category: 'Plushie', imageUrl: 'conejo.jpg', isActive: true },
    { name: 'Pulpo Reversible', price: 17000, description: 'Cambia de cara feliz a cara enojada al darlo vuelta.', category: 'Plushie', imageUrl: 'pulpo.jpg', isActive: true },
    { name: 'Gato Naranja', price: 16000, description: 'Gatito de peluche con cola larga y bigotes bordados.', category: 'Plushie', imageUrl: 'gato.jpg', isActive: true },
    { name: 'Dinosaurio', price: 19000, description: 'Dino verde con espinas de tela y panza blandita.', category: 'Plushie', imageUrl: 'dino.jpg', isActive: false },

  // Clothing (6)
    { name: 'Remera Bear', price: 12000, description: 'Remera de algodón con estampa de osito.', category: 'Clothing', imageUrl: 'remera.jpg', isActive: true },
    { name: 'Buzo Oso', price: 28000, description: 'Buzo con capucha y orejitas, interior de friza.', category: 'Clothing', imageUrl: 'buzo.jpg', isActive: true },
    { name: 'Pijama Polar', price: 25000, description: 'Pijama de polar para los días de frío.', category: 'Clothing', imageUrl: 'pijama.jpg', isActive: true },
    { name: 'Medias Divertidas', price: 5000, description: 'Par de medias de colores con diseños de animalitos.', category: 'Clothing', imageUrl: 'medias.jpg', isActive: true },
    { name: 'Gorro de Lana', price: 9000, description: 'Gorro tejido con pompón, calentito y suave.', category: 'Clothing', imageUrl: 'gorro.jpg', isActive: true },
    { name: 'Campera', price: 35000, description: 'Campera acolchada con bolsillos y cierre.', category: 'Clothing', imageUrl: 'campera.jpg', isActive: false },

  // Accessory (6)
    { name: 'Llavero Osito', price: 4000, description: 'Mini peluche con argolla para llaves o mochila.', category: 'Accessory', imageUrl: 'llavero.jpg', isActive: true },
    { name: 'Mochila Mini', price: 22000, description: 'Mochila chiquita con cierre y correas ajustables.', category: 'Accessory', imageUrl: 'mochila.jpg', isActive: true },
    { name: 'Lentes Corazón', price: 6000, description: 'Anteojos de sol con marco en forma de corazón.', category: 'Accessory', imageUrl: 'lentes.jpg', isActive: true },
    { name: 'Pins Pack x5', price: 3500, description: 'Set de 5 pins esmaltados para decorar mochilas.', category: 'Accessory', imageUrl: 'pins.jpg', isActive: true },
    { name: 'Vincha Orejitas', price: 7000, description: 'Vincha con orejitas de peluche para el pelo.', category: 'Accessory', imageUrl: 'vincha.jpg', isActive: true },
    { name: 'Cartuchera', price: 8000, description: 'Cartuchera de tela con cierre, entran todos los útiles.', category: 'Accessory', imageUrl: 'cartuchera.jpg', isActive: true },
];


const seed = async () =>{

    try{
        await sequelize.sync({force: true});

        await Admin.create({
            username: "pepito",
            email: "pepito@admin.com",
            password: "admin123",
        })

        await Product.bulkCreate(products);
        console.log("Productos creados");

    } catch(error){
        console.log("error al crear productos");
    }
}

seed();