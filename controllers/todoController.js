
/**********************************

todoController

***********************************/

// This is the module where javascript will control the
// behavior of our to do list
// Manipulates the data and handle the routes.
// For instance passing the data from the model to the
// view.

// Imports mongoose npm library.
var mongoose = require('mongoose');
// Imports theApp module.
// use variable name to work with database.
var theApp = require('../models/theApp.js');
// Parse data to json.
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});


// Exports function.
// Allows to create routes.
module.exports = function(app) {

  // It will handle all of our request handlers.

  // Endpoints for performing crud operations.
  // Endpoints for render view a user visits /todo on the browser.
  // request when the visits this specific url on the browser.
  app.get('/todo', function(req, res) {

    // Function call,
    // takes two parameters
    // Gets data from mongodb and pass it to the view.
    // Method for finding item in a collection and
    // a function with the data we retrieve.
    // By passing an empty object we get all the items in a collection.
    theApp.find({}, function(err, data){

      // Runs if there is an error.
      if(err) {

        throw err;

      }

      // Renders to the view.
      // Data is what is returned after we use that find method.
      res.render('todo', {todos: data});

    });

  });

  // Adds middleware so that we can access all the data send to us
  app.post('/todo', urlencodedParser, function(req, res) {

    // Get data from the view and add it to mongoDB.
    // get data from req.body
    var newToDo = theApp(req.body);

    // Method call.
    // Saves data to the databse.
    // Takes one parameter,
    // a callback function with the error and the data.
    newToDo.save(function(err, data) {

      // Runs if there is an error.
      if(err) {

        throw err;

      }

      // Sends data back to the view.
      res.json(data);

    });

  });

  // Past item to the url so see which one we are trying to delete.
  app.delete('/todo/:item', function(req, res) {

    // Delete the requested item from mongoDB.
    // Replacing the hypthons with a space
    // Once it finds item in the collection,
    // it will remove it.
    theApp.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data) {

      // Runs if there is an error.
      if(err) {

        throw err

      }

      // Sends back data to the view.
      res.json(data);

    });

  });



};

// Connects to database.
mongoose.connect('mongodb://127.0.0.1:27017/app',

  {useNewUrlParser: true},

  () => {

    console.log("Connected to DB!")

});
