const knex = require('./knex')


const lastThree = () => {
  return knex.select()
    .from('reviews').limit(3)
    .join('albums', 'reviews.album_id', '=', 'albums.id')
    .join('users', 'reviews.user_id', '=', 'users.id')
    .then(reviews => reviews)
    .catch(error => error)
}







module.exports = {
  lastThree
}
