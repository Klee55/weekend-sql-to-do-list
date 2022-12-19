const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// post function to get input from dom
router.post('/', (req, res) =>{
    console.log('post request made', req.body);
    const newTask = req.body;
    const queryText = `
        INSERT INTO "tasks" ("task")
        VALUES ('${newTask.task}');
    `;
    // console.log(queryText);
    pool.query(queryText)
    .then((result =>{
        // console.log(result);
        res.sendStatus(201);
    }))

});





module.exports = router;