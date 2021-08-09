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
  console.log(`Adding task`, newTask);
  console.log([newTask.taskName, newTask.taskDescription, newTask.taskCompleted, newTask.taskDueDate]);
  let queryText = `INSERT INTO "tasks" ("task", "description", "completed")
                   VALUES ($1, $2, $3);`;
  pool.query(queryText, [newTask.taskName, newTask.taskDescription, false])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new book`, error);
      res.sendStatus(500);
    });
});

//Update task list
router.put('/:id',  (req, res) => {
  let tasksID = req.params.id;
  console.log(`Completed task`, tasksID);
  //adding parameterized query text to protect from anon
  let queryText = `UPDATE tasks SET "completed" = true  WHERE "id" = $1;`;
  pool.query(queryText, [req.params.id])
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new task`, error);
      res.sendStatus(500);
    });
});

//Delete task from list
router.delete('/:id',  (req, res) => {
  let taskToDelete = req.params.id;
  console.log(`Deleted task`, taskToDelete);
//adding parameterized query text to protect from hackers
  let queryText = `DELETE FROM "tasks" WHERE "id" = $1;
            `;
  //adding real query text to tell db what to do
  const sqlParams = [taskToDelete];
  pool.query(queryText, sqlParams)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(`Error adding new new task`, error);
      res.sendStatus(500);
    });
});

module.exports = router;

