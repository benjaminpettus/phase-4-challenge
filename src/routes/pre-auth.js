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
    response.render('index', {albums: albums, reviews: reviews})
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
  response.render('sign-in')
})

preAuth.post('/signin', passport.authenticate('local', {
                          successRedirect: '/users',
                          failureRedirect: '/signin'

                        })
)

preAuth.get('/logout', (request, response) => {
  response.clearCookie('user_sid')
    .redirect('signin')
})






module.exports = preAuth
