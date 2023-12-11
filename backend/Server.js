const connectDB = require("./Config/DatabaseConfig");
const dotenv = require("dotenv");
dotenv.config({ path: "./Config/.env" });
const app = require("./app");

//this is used to connect database at given port from env//
connectDB.connectDatabase();
app.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`);
});

const cloudinary = require("cloudinary");
// const bodyParser = require("body-parser");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
