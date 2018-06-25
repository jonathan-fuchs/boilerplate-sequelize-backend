'use strict'; // eslint-disable-line semi

const api = module.exports = require('express').Router() // eslint-disable-line new-cap

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./routes/users'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
