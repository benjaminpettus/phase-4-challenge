const users = require('express').Router()
const User = require('../db/users')


users.get( '/', ( request, response ) => {
  const { user }= request.session.passport
  User.byId( user )
  .then( profile => {
    response.redirect( `users/${profile.username}` )
  })
})

users.get('/:username', ( request, response ) => {
  const {username} = request.params
  User.byUsername(username)
  .then( user => {
    response.render( 'profile', { user: user, session: request.session })
  })
})

// user.get('/review/:id/delete', (request, response ) => {
//   const { id }  = request.params
//   const { user } = request.session.passport
//   Query.deleteReview( id )
//     .then( review => {
//       Query.findById( user )
//       .then( user => {
//           const { username } = user
//         response.redirect('/user/' + username)
//       })
//   })
// })



module.exports = users
