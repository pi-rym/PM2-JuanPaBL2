const mongoose = require('mongoose');
require('dotenv').config();

//importo la URI de mi base de datos
const URI = process.env.v_entorno

//creo funcion conecction
const dbConnection = async () => {
    await mongoose.connect(URI);
};

module.exports = dbConnection;

