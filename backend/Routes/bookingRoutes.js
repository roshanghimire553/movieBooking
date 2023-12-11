const express = require("express");
const { bookTicket } = require("../Controller/bookingController");
const router = express.Router();

router.route("/create").post(bookTicket);

module.exports = router;
