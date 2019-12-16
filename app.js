 // Imports express.
var express = require('express');
// Imports module.
var todoController = require('./controllers/todoController');

// Initializes express app.
var app = express();

// Sets up template engine.
app.set('view engine', 'ejs');

// Serve up static files
// such as html and css.
app.use(express.static('./public'));

// Fire controllers.
// By passing app as a parameter,
// it allows to use routes in the todoController module.
todoController(app);

// Listen to port.
app.listen(3000);
console.log('You are listenning to port 3000');
