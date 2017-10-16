
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([
        {id: 1, title: 'Malibu', artist: 'Anderson .Paak'},
        {id: 2, title: 'A Seat at the Table', artist: 'Solange Knowles'},
        {id: 3, title: 'Melodrama', artist: 'Lorde'},
        {id: 4, title: 'In Rainbows', artist: 'Radiohead'}
      ]);
    });
};
