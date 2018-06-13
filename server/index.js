'use strict'; // eslint-disable-line semi

const express = require('express');
const app = express();
const morgan = require('morgan');
const {resolve} = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

// we will need our sequelize instance from somewhere
const db = require('./../db');

// configure and create our database store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db: db });

// sync so that our session table gets created
dbStore.sync();

app.use(morgan('dev'));

app.use(express.static(resolve(__dirname, '..', 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  store: dbStore,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./api'));

app.get('*', (req, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')));

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// app.listen(3000, function () {
//   console.log('Listening on port 3000');
// });

module.exports = app;
