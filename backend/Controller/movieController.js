const movieModel = require("../Model/movieModel");
const showtimeModel = require("../Model/showtimeModel");
const cloudinary = require("cloudinary");

//for creating movies list//
exports.MovieCreate = async (req, res) => {
  try {
    const myCloudFile = await cloudinary.v2.uploader.upload(req.file.path, {
      folder: "Movies",
    });
    const { title, genre, showtime, description, tickets } = req.body;
    const Movie = new movieModel({
      title,
      genre,
      showtime,
      description,
      tickets,
      photo: {
        public_id: myCloudFile.public_id,
        url: myCloudFile.secure_url,
      },
    });
    const NewMovies = await Movie.save();
    console.log(NewMovies);

    return res.status(200).json({
      success: true,
      message: "created Successfully",
      data: NewMovies,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

//for getting single movies//

exports.getSingleMovie = async (req, res) => {
  const id = req.params.id;
  try {
    const movies = await movieModel.findById(id).populate("showtime");
    if (!movies) {
      return res.status(404).json({
        success: false,
        message: "movies cannto find",
      });
    }
    res.status(200).json({
      success: true,
      message: "movies found successful",
      data: movies,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

//for getting all movies list//

exports.getAllMovie = async (req, res) => {
  try {
    const movies = await movieModel.find({});
    if (!movies) {
      return res.status(404).json({
        success: false,
        message: "movies cannot find",
      });
    }
    res.status(200).json({
      success: true,
      message: "movies found successful",
      data: movies,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

//for creating shown times//

exports.createShowtime = async (req, res) => {
  const movieId = req.params.movieId;

  try {
    const newShowtime = new showtimeModel({ ...req.body });
    const showtime = await newShowtime.save();

    await movieModel.findByIdAndUpdate(movieId, {
      $push: { showtime: showtime._id },
    });

    return res.status(200).json({
      message: "Showtime created successfully",
      success: true,
      data: showtime,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
