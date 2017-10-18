const knex = require('./knex')


const lastThree = () => {
  return knex.select()
    .from('reviews').limit(3)
    .orderBy('reviews.id', 'desc')
    .join('albums', 'reviews.album_id', '=', 'albums.id')
    .join('users', 'reviews.user_id', '=', 'users.id')
    .then(reviews => reviews)
    .catch(error => error)
}

const byAlbum = (id) => {
  return knex('reviews')
    .where('album_id', id)
    .orderBy('reviews.id', 'desc')
    .leftJoin('albums', 'reviews.album_id', '=', 'albums.id')
    .leftJoin('users', 'reviews.user_id', '=', 'users.id')
    .select('reviews.id AS id', 'album_id', 'user_id', 'content', 'reviews.created_on AS created_on', 'albums.title AS title', 'albums.artist AS artist', 'users.username AS username', 'users.email AS email')
    .then(reviews => reviews)
    .catch(error => error)
}

const byUserId = (userId) => {
  return knex('reviews')
    .where('user_id', userId)
    .orderBy('reviews.id', 'desc')
    .leftJoin('albums', 'reviews.album_id', '=', 'albums.id')
    .leftJoin('users', 'reviews.user_id', '=', 'users.id')
    .select('reviews.id AS id', 'album_id', 'user_id', 'content', 'reviews.created_on AS created_on', 'albums.title AS title', 'albums.artist AS artist', 'users.username AS username', 'users.email AS email')
    .then(reviews => reviews)
    .catch(error => error)
}

const addReview = (userId, albumId , content) => {
  return knex('reviews')
    .returning('*')
    .insert({
      user_id: userId,
      album_id: albumId,
      content: content
    })
    .then(review => review )
    .catch( error => error )
}

const deleteReview = ( id ) => {
  return knex('reviews')
  .where('id', id)
  .del()
}





module.exports = {
  lastThree,
  byAlbum,
  byUserId,
  addReview,
  deleteReview
}
