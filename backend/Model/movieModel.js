const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  photo: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  tickets: {
    type: Number,
    required: true,
  },
  showtime: [
    {
      type: mongoose.Types.ObjectId,
      ref: "showntime",
    },
  ],
});

module.exports = mongoose.model("Movie", MovieSchema);
