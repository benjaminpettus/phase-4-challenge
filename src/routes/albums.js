const albums = require('express').Router()
const Album = require('../db/albums')
const Reviews = require('../db/reviews')
const passport = require('../auth/passport')

albums.get( '/:id', ( request, response ) => {
  const { id } = request.params
    Album.getById(id)
    .then( album => {
    Reviews.byAlbum(id)
    .then( reviews => {
      if(request.session.passport){
        response.render('album', {album: album, reviews: reviews, session: request.session})
      } else {
        response.render('album', {album: album, reviews:reviews})
      }
    })
    })
})

albums.get( '/:id/new-review', ( request, response ) => {
  const { id } = request.params
  return Album.getById(id)
   .then( album => {
     if(request.session.passport){
       response.render('new-review', { id: id, album: album, session: request.session })
     } else {
       response.render('new-review', { id: id, album: album })
     }
  })
})


albums.post( '/:id/new-review', ( request, response ) => {
  if ( request.session.passport) {
    const { user } = request.session.passport
    const { content } = request.body
    const { id } = request.params
    Reviews.addReview( user, id, content )
    .then( review => {
      return response.redirect(`/albums/${id}`)
    })
  }
})

albums.delete('/:reviewId', (request, response ) => {
  console.log('that route tho')
  const { reviewId }  = request.params
  console.log('enroute::::::', reviewId)
  Reviews.deleteReview( reviewId )
    .then( review => review)
    .catch( error => console.error )
})









module.exports = albums
