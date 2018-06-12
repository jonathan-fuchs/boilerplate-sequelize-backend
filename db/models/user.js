'use strict'; // eslint-disable-line semi
/* eslint-disable camelcase */

const User = db.define('users', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
})

module.exports = User
