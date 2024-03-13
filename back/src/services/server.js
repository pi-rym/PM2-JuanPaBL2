//CREO EL SERVIDOR

const express = require('express')
const app = express();

//Importo el enrutador
const router = require('../routers/router')

//Uso el enrutador en el servidor creado
app.use(router)

//exporto el servidor
module.exports = app;