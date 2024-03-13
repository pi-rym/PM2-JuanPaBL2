const {Router} = require('express')

const router = require('./router')

const router = router()

router.use('/', router)

module.exports = router;