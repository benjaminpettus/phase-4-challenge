const albums = require('express').Router()
const Album = require('../db/albums')

albums.get( '/:id', ( request, response ) => {
  const { id } = request.params
   Album.getById(id)
    .then( album => {
      response.render('album', {album: album, session: request.session})
    })
})

albums.get( '/:id/new-review', ( request, response ) => {
  const { id } = request.params
  response.render('new-review', { id: id, session: request.session })
})


// albums.post( '/:id/new-review', ( request, response ) => {
//   const { id } = request.params
//   const { user } = request.session.passport
//   const { userId, content } = request.body
//   Albums.addReview( user, id, content )
//     .then( review => {
//       response.redirect(`/album/${id}`)
//     })
// })










module.exports = albums
