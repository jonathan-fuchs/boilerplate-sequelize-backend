'use strict'; // eslint-disable-line semi

const Sequelize = require('sequelize');

const db = module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/boilersqlizedb', {
  logging: false, 
  define: {
    underscored: true,       // snake_case column names
    freezeTableName: true,   // don't change table names from specified
    timestamps: true,        // include timestamp columns
  }
});

require('./models')
