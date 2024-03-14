const {Router} = require('express')

const router = require('./router')

router.use('/', router)

module.exports = router;