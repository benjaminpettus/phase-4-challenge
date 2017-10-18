const knex = require('./knex')

const byId = (id) => {
  return knex.select()
    .from('users')
    .where('id', id)
    .then(user => user[0])
    .catch(error => error)
}

const byEmail = (email) => {
  return knex.select()
    .from('users')
    .where('email', email)
    .then(user => user[0])
    .catch(error => error);
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
    .catch( error => error )
}

module.exports = {
  byId,
  byEmail,
  create
}
