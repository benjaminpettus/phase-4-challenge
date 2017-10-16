require('dotenv').config({path: '../../.env'})

const config = require('./knexfile')



module.exports = require('knex')(config)
