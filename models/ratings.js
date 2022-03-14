const Double = require('@mongoosejs/double');

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ratingSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title not provided "]
  },
  averageRating: {
    type: Double,
    required: false
  },
  userRating: [{
      mail_id: String,
      rating: Double
  }],
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Ratings', ratingSchema);
