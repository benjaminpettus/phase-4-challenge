const albums = require('express').Router()
const Album = require('../db/albums')
const passport = require('../auth/passport')

albums.get( '/:id', ( request, response ) => {
  const { id } = request.params
   Album.getById(id)
    .then( album => {
      if(request.session.passport){
        response.render('album', {album: album, session: request.session})
      } else {
        response.render('album', {album: album})
      }
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
  const { id } = request.params
  if(request.session.passport) {
    const { user } = request.session.passport
  }

  console.log( 'req body from post route',request.body)
  console.log('session from post route', request.session)
  // Albums.addReview( user, id, content )
  //   .then( review => {
      return response.redirect(`/albums/${id}`)
  //   })
})










module.exports = albums
