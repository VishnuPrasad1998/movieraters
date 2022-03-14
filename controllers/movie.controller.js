const { request } = require("express");
var Movie = require("../models/movie");
var Ratings = require("../models/ratings");

exports.addmovie = (req, res) => {
    if (!req.user) {
        res.status(403)
          .send({
            message: "Unauthorized to access the endpoint"
          });
    } else {
          var myRating = req.body.myRating;
          const movie = new Movie({
            title: req.body.title,
            description: req.body.description,
            genre: req.body.genre,
            owner: req.user.email
          });

          const rating = new Ratings({
            title: req.body.title,
            averageRating: req.body.myRating,
            userRating: [{mail_id: req.user.email, rating: req.body.myRating}]
          });
          rating
          .save(rating)
          movie
          .save(movie)
          .then(data => {
             res.status(201).send(data);
          })
          .catch(err => {
            res.status(500).send({
            message:
                err.message || "Unable to save"
            });
          });
    }};

exports.editmovie = async (req, res) => {
    if (!req.user) {
        res.status(403)
            .send({
            message: "Unauthorized to access the endpoint"
            });
    } else {
        const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre
        });
        var response = await Movie.findById(req.params.id)
        if(response['owner'] === req.user.email){
            Movie.findByIdAndUpdate({_id: req.params.id}, {$set: {
                title: req.body.title,
                description: req.body.description,
                genre: req.body.genre
            }})
            .then(data => {
                res.status(200).send({message: "Updated successfully"});
            })
            .catch(err => {
                res.status(500).send({
                message:
                    err.message || "Unable to update"
                });
            });
        } else {
            res.status(401).send({
                message:"Owner only can edit the post"
                });
        }
    }};

exports.deletemovie = async (req, res) => {
    if (!req.user) {
        res.status(403)
            .send({
            message: "Unauthorized to access the endpoint"
            });
    } else {
        var titleVal = await Movie.findById(req.params.id)
        if(titleVal['owner'] === req.user.email){
            Ratings.deleteOne({title: titleVal['title']}, function (err) {})
            Movie.findByIdAndDelete(req.params.id)
            .then(data => {
                res.status(200).send({
                    message: "Deleted successfully"
                    });
            })
            .catch(err => {
                res.status(500).send({
                message:
                    err.message || "Unable to delete"
                });
            });
        } else {
            res.status(401).send({
                message:"Owner only can delete the post"
                });
        }       
    }};
