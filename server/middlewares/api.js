const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const pgp = require('pg-promise')();
const db = pgp('postgres://@localhost:5432/Strings');

db.none('INSERT INTO Strings VALUES($1)', [
  'I am a string. Add more strings to the database on the Submit page!',
])
  .then(() => {
    console.log('String successfully inserted into database');
  })
  .catch(error => {
    console.log('Error while inserting string to database: ', error);
  });

router.use((req, res, next) => {
  console.log('Request made to API');
  next();
});

/* Placeholder; Did not end up using because the 
 * UI needed such simple data, it was more straightforward to 
 * grab directly from localhost:3000/strings
 */
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
  db.none('INSERT INTO Strings VALUES($1)', [req.body.string])
    .then(() => {
      console.log('String successfully inserted into database');
      res.end();
    })
    .catch(error => {
      console.log('Error while inserting string to database: ', error);
    });
});

module.exports = router;
