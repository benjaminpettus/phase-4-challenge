const users = require('express').Router()
const User = require('../db/users')


users.get('/', (request, response) => {
  console.log(response.body)
  console.log(request.params)
  response.redirect(`/users/${id}`)
})

users.get('/:id', (request, response) => {
  const { id } = request.params
  User.byId(id)
    .then( user => {
      response.render('profile', {user: user})
    })
})



module.exports = users
