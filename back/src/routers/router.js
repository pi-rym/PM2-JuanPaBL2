//Importo el controlador
const {controlador} = require("../controllers/controlador")

//CREAR ENRUTADOR USANDO LA FUNCION EXPRESS.ROUTER (forma 2)
const express = require('express');
const router = express.Router();

//Asocio el enrutador que recibe la solicitud http con el controlador
router.get("/movie", controlador => {
})

module.exports = router;