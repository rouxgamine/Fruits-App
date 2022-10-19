const mongoose = require('mongoose')

// Make a Schema
const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean
})

// Make a Model From the Schema -- let us update documents in the collection
const Fruit = mongoose.model('Fruit', fruitSchema) // we make Fruit collection inside the Database

// Export the Model For Use in the App
module.exports = Fruit
