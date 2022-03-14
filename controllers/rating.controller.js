const { request } = require("express");
var Movie = require("../models/movie");
var Ratings = require("../models/ratings")

exports.addrating = async (req, res) => {
    if (!req.user) {
        res.status(403)
          .send({
            message: "Unauthorized to access the endpoint"
          });
    } else {
          var movieTitle = req.body.title
          var mail_id = req.user.email
          var userRatings = req.body.rating
          var data = await Ratings.findOne({userRating: {$elemMatch:{mail_id: mail_id}}, title: movieTitle})
          if(data === null){
            var { averageRating, userRating } = await Ratings.findOne({title: movieTitle})
            var totalRatings = userRating.length
            var averageRating = (averageRating + userRatings) / (totalRatings + 1)  
            Ratings.updateOne({'title':movieTitle},{'averageRating':averageRating}, function(err, docs){})
            var userRating = {mail_id: mail_id, rating: userRatings}
            Ratings.findOneAndUpdate({title:movieTitle}, {$push: { userRating: userRating}}, function(err, docs){})
            res.status(200).send({
                message: "Rating recorded successfully"
            });
          } else {
            res.status(400).send({
                message: "User Already gave rating"
            }); 
          }
    }};