const users = require('express').Router()
const User = require('../db/users')
const Reviews = require('../db/reviews')


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
    console.log('user in route<<<<<<',user)
  Reviews.byUserId(user.id)
  .then( reviews => {
    console.log('in route ><<><><><><>',reviews)
    if (request.session.passport) {
      response.render( 'profile', { user: user, reviews: reviews, session: request.session })
    } else {
      response.render( 'profile', { user: user, reviews:reviews })
    }
  })
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
