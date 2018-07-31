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

router.post('/', (req, res) => {
  console.log('req is: ', req);
  // once I add get request to front-end, decide/figure out how data is coming through
  // use 'query'?
  db.none('INSERT INTO Strings VALUES($1)', ['yik yak'])
    .then(() => {
      console.log('String successfully inserted into database');
      res.end();
    })
    .catch(error => {
      console.log('Error while inserting string to database: ', error);
    });
});

module.exports = router;
