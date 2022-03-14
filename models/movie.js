var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title not provided "]
  },
  description: {
    type: String,
    required: [true, "Description not provided "]
  },
  genre: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: false 
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Movie', movieSchema);
