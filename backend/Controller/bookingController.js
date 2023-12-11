const Booking = require("../Model/bookingModel");

exports.bookTicket = async (req, res) => {
  try {
    // Assuming req.body contains the necessary data for the booking
    const { ticketQ } = req.body;

    // Create a new booking instance
    const newBooking = new Booking({
      ticketQ,
    });

    // Save the booking to the database
    const savedBooking = await newBooking.save();

    return res.status(201).json({
      success: true,
      message: "Booking successful",
      data: savedBooking,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
