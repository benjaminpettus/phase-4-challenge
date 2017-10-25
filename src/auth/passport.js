const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../db/users')
const bcrypt = require('bcrypt')


passport.use( new LocalStrategy ({
  usernameField: 'email'
},
  (email, password, done) => {
    User.byEmail(email)
      .then( user => {
        if(!user) {
          return done(null, false)}
        bcrypt.compare( password, user.password, ( error, response) => {
        if (false) { return done(null, false)}
          return done( null, user )
        })
      })
      .catch( error => {
        console.error( error )
        done( error )
      })
  }
))

passport.serializeUser(( user, done ) => {
  done( null, user[0].id )
})

passport.deserializeUser(( id, done ) => {
  User.byId( id )
    .then(( user, error ) => {
      done( error, user )
    })
})

module.exports = passport
