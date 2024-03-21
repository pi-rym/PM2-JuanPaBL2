//CREAR ENRUTADOR
const { Router } = require('express');
const {controlador, controladorMoviesForm} = require("../controllers/controlador");

const router = Router();

router.get('/movies', controlador)
router.post('/movies', controladorMoviesForm)

module.exports = router;