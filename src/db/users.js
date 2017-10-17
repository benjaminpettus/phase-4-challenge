const knex = require('./knex')

const byId = (id) => {
  return knex.select()
    .from('users')
    .where('id', id)
    .then(user => user)
    .catch(error => console.error)
}

const byEmail = (email) => {
  return knex.select()
    .from('users')
    .where('name', email)
    .catch(error => console.error);
}

module.exports = {
  byId,
  byEmail
}
