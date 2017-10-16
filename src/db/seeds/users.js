
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'me', email: 'me', password: 'me'},
        {id: 2, username: 'you', email: 'you', password: 'you'},
        {id: 3, username: 'them', email: 'them', password: 'them'}
      ]);
    });
};
