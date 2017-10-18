const knex = require('./knex.js')


const getAll = () => {
  return knex.select()
    .from('albums')
    .then(allAlbums => allAlbums)
    .catch(error => error )
}

const getById = (id) => {
  return knex.select()
    .from('albums')
    .where('id', id)
    .then(album => album[0])
    .catch(error => error)
}










module.exports = {
  getAll,
  getById
}
