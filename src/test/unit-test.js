const chai = require('chai')
const expect = chai.expect
const Albums = require('../db/albums')
const Reviews = require('../db/reviews')
const Users = require('../db/users')
// console.log('query object:::', Albums.getAll())

describe('db queries', () => {

  context('albums', () => {

    it('should return the last three entries', (done) => {
      Albums.getAll()
      .then(all => {
        expect(all[0].title).to.eql('Malibu')
        done()
      })

    })

    it('should return an album by its id', (done) => {
      const id = 3
      Albums.getOne(id)
      .then(album => {
        expect(album.title).to.eql('Melodrama')
        expect(album.artist).to.eql('Lorde')
        done()
      })
    })

  })

  context('reviews', () => {

    it('should return the 3 recent reviews', (done) => {
      Reviews.lastThree()
      .then(reviews => {
        expect(reviews.length).to.equal(3)
        done()
      })
    })

  })

  context('users', () => {
    it('should create a user', (done) => {
      const email = 'hi@hi.com'
      const username = 'hi'
      const password = 'hi'
      Users.create(email, username, password)
      Users.byEmail(email)
      .then(user => {console.log(user)})
      done()

    })
  })


})
