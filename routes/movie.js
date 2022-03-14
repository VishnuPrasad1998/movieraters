var express = require("express"),
router = express.Router(),
verifyToken = require('../middlewares/authJWT'),
{addmovie, editmovie, deletemovie} = require("../controllers/movie.controller.js");

router.post("/addmovie", [verifyToken], addmovie, function (req, res) {});

router.put("/editmovie/:id", [verifyToken], editmovie, function (req, res) {});

router.delete("/deletemovie/:id", [verifyToken], deletemovie, function (req, res) {});

module.exports = router;