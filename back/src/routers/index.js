const {Router} = require('express')

const router = require('./router')

const moviesController = require('../controllers/controlador')

const router = router()

router.use('/movies', router)

module.exports = router;