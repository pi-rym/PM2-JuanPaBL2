//CREAR ENRUTADOR
const { Router } = require('express');
const {controlador} = require("../controllers/controlador");

const router = Router();

//Asocio el enrutador que recibe la solicitud http con el controlador
router.get('/movies', controlador)//--> express va a usar la ruta movies con el controlador

module.exports = router;