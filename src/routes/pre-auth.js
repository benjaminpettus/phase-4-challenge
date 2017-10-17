const preAuth = require('express').Router()
const Albums = require('../db/albums')
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

preAuth.post('/signup', (request, response) => {
  console.log('from route', request.body)
  const { username, email, password } = request.body
  bcrypt.hash(password, 10, (error, hash) => {
    User.create(email, username, hash).
    then( user => {

    })
  });

})

preAuth.get('/signin', (request, response) => {
  response.render('sign-in')
})

preAuth.post('/signin', passport.authenticate('local', { successRedirect: '/users',
                          failureRedirect: '/signin',
                          failureFlash: 'Invalid Username or Password'
                        })
)






module.exports = preAuth
