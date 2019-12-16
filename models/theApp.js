// Notes:
  // A schema represents how data will look in the database.
  // It is like a bluep

// Imports mongoose npm mdoule.
const mongoose = require('mongoose');

// Builds schema.
// Takes one parameter,
// an object.
const todoSchema = mongoose.Schema({

  // Builds object.
  item: String

});

// Creates model.
// Takes two parameters,
// name of model that will be stored as a collection on mongodb,
// and the schema we are basing this model on.
module.exports = mongoose.model('Todo', todoSchema);
