const knex = require('./knex')


const lastThree = () => {
  return knex.select()
    .from('reviews').limit(3)
    .join('albums', 'reviews.album_id', '=', 'albums.id')
    .join('users', 'reviews.user_id', '=', 'users.id')
    .then(reviews => reviews)
    .catch(error => error)
}

const byAlbum = (id) => {
  return knex.select()
    .from('reviews')
    .where('album_id', id)
    .join('albums', 'reviews.album_id', '=', 'albums.id')
    .join('users', 'reviews.user_id', '=', 'users.id')
    .then(reviews => reviews)
    .catch(error => error)
}

const byUserId = (userId) => {
  return knex.select()
    .from('reviews')
    .where('user_id', userId)
    .join('albums', 'reviews.album_id', '=', 'albums.id')
    .join('users', 'reviews.user_id', '=', 'users.id')
    .then(reviews => reviews)
    .catch(error => error)
}





module.exports = {
  lastThree,
  byAlbum,
  byUserId
}
