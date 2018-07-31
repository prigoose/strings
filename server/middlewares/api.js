const express = require('express');
const router = express.Router();

const pgp = require('pg-promise')();
const db = pgp('postgres://@localhost:5432/Strings');

router.use((req, res, next) => {
  console.log('Request made to API');
  next();
});

router.get('/', (req, res) => {
  db.many('SELECT * FROM Strings;')
    .then(data => {
      // console.log('DATA:', data);
      res.json(data);
    })
    .catch(error => {
      console.log('ERROR:', error);
    });
});

module.exports = router;
