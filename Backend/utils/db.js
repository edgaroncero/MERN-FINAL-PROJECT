// Conexión con MongoAtlass | MongoDB Compass 
const mongoose = require('mongoose');
require('dotenv').config();

/* const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/Proyecto-Final';
 */

// URL local de nuestra base de datos en mongoose y su nombre
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/trabajo-final-grupo';
// Función que conecta nuestro servidor a la base de datos de MongoDB mediante mongoose
const connect = () => mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    DB_URL,
    connect/*  */
  };
  