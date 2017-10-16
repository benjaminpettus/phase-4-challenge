const knex = require('./knex.js')


const getAll = () => {
  return knex.select()
    .from('albums')
    .then(allAlbums => allAlbums)
    .catch(error => error )
}









module.exports = {

  getAll
}
