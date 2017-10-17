
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, user_id: '3', album_id: '4', content: 'Motherfucker do that shit to me, he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?'},
        {id: 2, user_id: '1', album_id: '2', content: 'Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they\'re actually proud of that shit.'},
        {id: 3, user_id: '2', album_id: '3', content: 'Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. That\'s also clear.'},
        {id: 4, user_id: '1', album_id: '1', content: 'Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. That\'s also clear.'}
      ]);
    });
};
