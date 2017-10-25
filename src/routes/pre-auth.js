const preAuth = require('express').Router()
const Albums = require('../db/albums')
const Users = require('../db/users')
const Reviews = require('../db/reviews')
const passport = require('../auth/passport')
const bcrypt = require('bcrypt')


preAuth.get('/', (request, response) => {
  Albums.getAll()
  .then( albums => {
  Reviews.lastThree()
  .then( reviews => {
    if(request.session.passport) {
      response.render('index', {albums: albums, reviews: reviews, session: request.session})
    } else {
      response.render('index', {albums: albums, reviews: reviews})
    }
  })
  })
})

preAuth.get('/signup', (request, response) => {
  response.render('sign-up')
})

preAuth.post('/signup', (request, response, next) => {
  const { username, email, password } = request.body
  bcrypt.hash(password, 10, (error, hash) => {
    Users.create(email, username, hash)
    .then( user => {
      request.login(user, function(error) {
        if (error) { return next(error); }
          response.redirect('/users');
        });
    })
  });
})

preAuth.get('/signin', (request, response) => {
  response.render('sign-in', {redirectUrl: request.get('Referer')})
})

preAuth.post('/signin', (request, response, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }
    if (!user) { response.redirect('/signin') }
    request.login(user, (err) => {
      if(err) { return next(err) }
      const redirectUrl = request.query.REDIRECT_URL || '/signin'
      response.redirect(redirectUrl)
      return
    })
  })(request, response, next)

})

preAuth.get('/logout', (request, response) => {
  response.clearCookie('user_sid')
    .redirect('signin')
})






module.exports = preAuth
