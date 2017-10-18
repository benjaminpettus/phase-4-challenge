const users = require('express').Router()
const User = require('../db/users')


users.get('/', (request, response) => {
  const { user } = request.session.passport
  response.redirect(`/users/${user}`)
})

users.get('/:id', (request, response) => {
  const { id } = request.params
  User.byId(id)
    .then( user => {
      response.render('profile', {user: user})
    })
})



module.exports = users
