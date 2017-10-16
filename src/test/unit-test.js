const chai = require('chai')
const expect = chai.expect
const Albums = require('../db/albums')
// console.log('query object:::', Albums.getAll())

describe('db queries', () => {

  it('should return the last three entries', (done) => {
    Albums.getAll()
    .then(all => {
      expect(all[0].title).to.eql('Malibu')
    })
    done()
  })

})
