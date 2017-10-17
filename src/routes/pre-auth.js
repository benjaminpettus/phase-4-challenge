const preAuth = require('express').Router()
const Albums = require('../db/albums')
const Reviews = require('../db/reviews')


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









module.exports = preAuth
