const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//Get all tasks from the table and append to the DOM
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "tasks" ORDER BY "task";';
  pool.query(queryText)
  .then(result => {
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting tasks', error);
    res.sendStatus(500);
  });
});


//Create a new task and insert into table
router.post('/',  (req, res) => {
  let newTask = req.body;
  console.log(`Adding book`, newTask);

  let queryText = `INSERT INTO "tasks" ("task", "description", "completed", "due")
                   VALUES ($1, $2);`;
  pool.query(queryText, [newBook.author, newBook.title])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new book`, error);
      res.sendStatus(500);
    });
});

//Update task list
router.put('/',  (req, res) => {
  // let updatedBook = req.params.id;
  console.log(`Adding task`, XX);
  //adding parameterized query text to protect from anon
  let queryText = `UPDATE "tasks" ("task", "description", "completed", "due")
                   VALUES ($1, $2, $3  $4);`;
  pool.query(queryText, [newBook.author, newBook.title, newBook.isRead])
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new book`, error);
      res.sendStatus(500);
    });
});

//Delete task from list
router.delete('/:id',  (req, res) => {
  let XX = req.params.id;
  console.log(`Deleted task`, XX);
//adding parameterized query text to protect from hackers
  let queryText = `DELETE FROM "tasks" WHERE "id" = $1;
            `;
  //adding real query text to tell db what to do
  const sqlParams = [XX];
  pool.query(queryText, sqlParams)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(`Error adding new book`, error);
      res.sendStatus(500);
    });
});

module.exports = router;

