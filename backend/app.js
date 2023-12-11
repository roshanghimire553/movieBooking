const express = require("express");
const app = express();

// const dotenv = require("dotenv");
// dotenv.config({ path: "./Config/.env" });

app.use(express.json());

//this is used to secure data sending between different request/

const cors = require("cors");
app.use(cors());

//used to send data in json format /
const bodyparse = require("body-parser");
app.use(bodyparse.json());

const userRoute = require("./Routes/userRoutes");
const movieRoute = require("./Routes/movieRoutes");
const movieBooking = require("./Routes/bookingRoutes");
//route and api for the user//
app.use("/api/user", userRoute);

//rouets and api for the movies//
app.use("/api/movies", movieRoute);

//routes and api for movie booking//
app.use("/api/Booking", movieBooking);
module.exports = app;
