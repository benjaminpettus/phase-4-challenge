const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
const Albums = require('./db/albums')
const passport = require('./auth/passport')
const session = require('express-session')
require('dotenv').config()

const port = process.env.PORT || 3000

const app = express()

require('ejs')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use( cookieParser() )

app.use(session({
  key: 'user_sid',
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: 50000
  }
}))

app.use(( request, response, next ) => {
  if(!( request.cookies && request.cookies.user_sid )) {
    response.clearCookie( 'user_sid' )
  }
  next()
})
// app.get('/albums/:albumID', (req, res) => {
//   const albumID = req.params.albumID
//
//   db.getAlbumsByID(albumID, (error, albums) => {
//     if (error) {
//       res.status(500).render('error', {error})
//     } else {
//       const album = albums[0]
//       res.render('album', {album})
//     }
//   })
// })
app.use(passport.initialize())
app.use(passport.session())
app.use(routes)

app.use((req, res) => {
  res.status(404).render('not_found')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
