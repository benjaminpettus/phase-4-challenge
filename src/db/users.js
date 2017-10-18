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
    .then(user => user)
    .catch(error => console.error);
}
const create = ( email, username, password ) => {
  return knex.select().from('users').where({ username: username })
    .then( user => {
      if(!user.length) {
      return knex( 'users' )
        .insert({
          email: email,
          username: username,
          password: password
        })
        .returning('*')
      }
    })
    .then( newUser => newUser )
    .catch( error => console.error )
}

module.exports = {
  byId,
  byEmail,
  create
}
