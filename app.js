const express = require('express');
const todoController =  require('./controllers/todoController');

const app = express();

// set up template engine , using ejs view engine
app.set('view engine', 'ejs');

// static files
app.use('/assets', express.static('assets'));

// fire controllers
todoController(app);

// listen to port
app.listen(3000);
console.log('You are listening to port 3000');