'use strict'; // eslint-disable-line semi

//require('APP/db');
const router = require('express').Router();

router.use('/users', require('./routes/users')); // matches all requests to /api/users/

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
