const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// post function to get input from DOM
router.post('/', (req, res) =>{
    console.log('post request made', req.body);
    const newTask = req.body;
    const queryText = `
        INSERT INTO "tasks" ("task")
        VALUES ('${newTask.task}');
    `;
    // console.log(queryText);
    pool.query(queryText)
    .then((result) =>{
        // console.log(result);
        res.sendStatus(201);
    })
    .catch((error) => {
        res.sendStatus(500);
    });
});

// function to get data from database and send to DOM
router.get('/', (req, res) =>{
    console.log('get request made');
    const queryText = 'SELECT * from tasks';
    pool.query(queryText)
    .then((result) => {
        // console.log('result from database:', result);
        res.send(result.rows);
    })
    .catch((error) => {
        res.sendStatus(500);
    });
});





module.exports = router;