'use strict'; // eslint-disable-line semi

const db = require('./../db'); 
const app = require('./');
const port = process.env.PORT || 3000;

db.sync({force: true})  // sync our database **TODO** remove force: true
  .then(function(){
    app.listen(port); // then start listening with our express server once we have synced
    console.log('Listening on', port);
  })
