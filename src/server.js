const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const Albums = require('./db/albums')
const passport = require('./auth/passport')

const port = process.env.PORT || 3000

const app = express()

require('ejs')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))



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
app.use(routes)

app.use((req, res) => {
  res.status(404).render('not_found')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
