const users = require('express').Router()
const User = require('../db/users')


// users.get('/', (request, response) => {
//   const { user } = request.session.passport
//   User.byId(user)
//   response.redirect(`/users/${user}`)
// })


users.get( '/', ( request, response ) => {
  const { user }= request.session.passport
  User.byId( user )
  .then( profile => {
    console.log('from route_+_+_+',profile)
    response.redirect( `users/${profile.username}` )
  })
})

// users.get('/:id', (request, response) => {
//   const { id } = request.params
//   User.byId(id)
//     .then( user => {
//       response.render('profile', {user: user, session: request.session})
//     })
// })
users.get('/:username', ( request, response ) => {
  const {username} = request.params
  console.log('username from route::::',username)
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
