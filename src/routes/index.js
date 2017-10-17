const router = require('express').Router()
const preAuth = require('./pre-auth')
const users = require('./users')



router.use('/', preAuth)
router.use('/users', users)








module.exports = router
