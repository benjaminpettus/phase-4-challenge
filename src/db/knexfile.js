// Update with your config settings.
require('dotenv').config({path: '../../.env'})
module.exports = {
    client: 'postgresql',
    connection: process.env.DB_HOST,
    migrations: {
      tableName: 'migrations'
    },
    seeds: {
      tableName: 'seeds'
    }
};
