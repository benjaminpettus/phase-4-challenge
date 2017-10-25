const router = require('express').Router()
const preAuth = require('./pre-auth')
const users = require('./users')
const albums = require('./albums')


//
// const isLoggedIn = (request, response, next) => {
//   const currentUrl = request.url
//   console.log('from middleware :::',currentUrl)
//   // if(!request.user) {
//     // response.redirect(`/signin?REDIRECT_URL=${currentUrl}`)
//   // } else {
//     // response.locals.isLoggedIn = true
//     next()
//
// }

// const isLoggedIn = (request, response, next) => {
//   const currentUrl = request.url
//   if (request.isAuthenticated()) {
//     next()
//     return
//   }
//   request.session.redirectTo = currentUrl
//   response.redirect('/signin')
// }

router.use('/', preAuth)
// router.use(isLoggedIn)
router.use('/users', users)
router.use('/albums', albums)








module.exports = router
