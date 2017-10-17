const knex = require('./knex')

const byId = (id) => {
  return knex.select()
    .from('users')
    .where('id', id)
    .then(user => user)
    .catch(error => console.error)
}

const byName = (name) => {
  return knex.select()
    .from('users')
    .where('name', name)
    .then(user => user)
    .catch(error => console.error);
}

module.exports = {
  byId,
  nyName
}
