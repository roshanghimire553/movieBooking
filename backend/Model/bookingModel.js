const moongose = require("mongoose");

const BookingModel = new moongose.Schema({
  ticketQ: {
    type: String,
    required: true,
  },
  movieId: {
    type: moongose.Types.ObjectId,
    ref: "Movie",
  },
  // userId: {
  //   type: moongose.Types.ObjectId,
  //   ref: "User", // Assuming you have a User model
  // },
});

module.exports = moongose.model("Booking", BookingModel);
