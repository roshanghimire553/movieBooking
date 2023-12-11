const express = require("express");
const router = express.Router();

//this is used to uploads photo //
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  MovieCreate,
  getSingleMovie,
  getAllMovie,
  createShowtime,
} = require("../Controller/movieController");

//this is route used to create movies//

router.route("/create").post(upload.single("photo"), MovieCreate);

//route to get single movies//
router.route("/find/:id").get(getSingleMovie);

//router to get all movies//
router.route("/find").get(getAllMovie);

//router to create movie shown time//
router.route("/create/:movieId").post(createShowtime);

module.exports = router;
