'use strict'; // eslint-disable-line semi

const {env} = app
const passport = require('passport')
const auth = require('express').Router() // eslint-disable-line new-cap

const User = require('./../db/models/user')

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});




module.exports = auth
