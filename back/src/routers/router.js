//CREAR ENRUTADOR USANDO LA FUNCION EXPRESS.ROUTER (forma 2)
const { Router } = require('express');
const {controlador} = require("../controllers/controlador")

const router = Router();

//Asocio el enrutador que recibe la solicitud http con el controlador
router.get('/', controlador)

module.exports = router;