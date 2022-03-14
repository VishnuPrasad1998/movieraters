var express = require("express"),
router = express.Router(),
verifyToken = require('../middlewares/authJWT'),
{addrating} = require("../controllers/rating.controller.js");

router.put("/addrating", [verifyToken], addrating, function (req, res) {
});


module.exports = router;