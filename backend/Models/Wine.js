const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let wineSchema = new Schema({
  nameOfWine: {
    type: String
  },
  nameOfWinery: {
    type: String
  },
  typeOfWine: {
    type: String
  },
  price: {
    type: String
  },
  rating: {
    type: String
  }
}, {
    collection: 'wines'
  })

module.exports = mongoose.model('Wine', wineSchema)