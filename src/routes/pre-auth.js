const preAuth = require('express').Router()
const Albums = require('../db/albums')


preAuth.get('/', (request, response) => {
  Albums.getAll()
  .then( albums => {
    console.log('in route _+_+',albums)
    response.render('index', {albums: albums})
  })
})









module.exports = preAuth
