const router = require('express').Router()
const preAuth = require('./pre-auth')
const users = require('./users')
const albums = require('./albums')



router.use('/', preAuth)
router.use('/users', users)
router.use('/albums', albums)








module.exports = router
