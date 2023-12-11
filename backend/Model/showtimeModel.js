const mongoose = require("mongoose");

const showTimesModel = new mongoose.Schema({
  startAt: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("showntime", showTimesModel);
