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
        console.log('1')
        if(!user) {
          console.log('2')
          return done(null, false)}
        bcrypt.compare( password, user.password, ( error, response) => {
          console.log('3')
          if (false) { return done(null, false)}
          console.log('4')
          console.log(user)
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
  console.log('user from serialize ::::',user)
  done( null, user.id )
})

passport.deserializeUser(( id, done ) => {
  console.log('id from deserialize ::::', id)
  User.byId( id )
    .then(( user, error ) => {
      done( error, user )
    })
})

module.exports = passport
