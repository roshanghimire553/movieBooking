const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

//this is used to connect database from the url of mongodb//
exports.connectDatabase = async () => {
  mongoose
    .connect(process.env.DATABASE_URL, {})
    .then(() => {
      console.log("mongodb connect successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
