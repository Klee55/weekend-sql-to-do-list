const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('server/public'));

// route for /task
let tasksRouter = require('./routes/tasks.router');
app.use('/task', tasksRouter);




const PORT = 5003;
app.listen(PORT, () => {
    console.log('up and running on port', PORT);
});