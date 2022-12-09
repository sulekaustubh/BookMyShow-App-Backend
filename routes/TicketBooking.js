const express = require("express");
const TicketBooking = express.Router();
const { connection } = require("../db/connector");
const { body, validationResult, oneOf } = require("express-validator");
const fetchUser = require("../middlewares/fetchUser");

// ROUTE 1: Get the last booking details using GET "/api/booking". Login Required
TicketBooking.get("/", fetchUser, async (req, res) => {
  try {
    let result = await connection
      .find({ user: req.user.id })
      .sort({ _id: -1 })
      .limit(1);

    // If no Last booking record found in database
    if (!result) {
      return res.json({ message: "No Previous Booking Found" });
    }
    // Sending the response
    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Book tickets using POST "/api/booking". Login Required
TicketBooking.post(
  "/",
  fetchUser,
  [
    body("movie", "Movie name is required").notEmpty(),
    body("slot", "time is required").notEmpty(),
    oneOf([
      body("seats.A1", "seat is required").notEmpty().isInt({gt:0}),
      body("seats.A2", "seat is required").notEmpty().isInt({gt:0}),
      body("seats.A3", "seat is required").notEmpty().isInt({gt:0}),
      body("seats.A4", "seat is required").notEmpty().isInt({gt:0}),
      body("seats.D1", "seat is required").notEmpty().isInt({gt:0}),
      body("seats.D2", "seat is required").notEmpty().isInt({gt:0}),
    ]) ,
  ],
  async (req, res) => {
    try {
      const body = req.body;

      // If there are errors, return Bad requests and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Create new booking record in database
      const bookmovietickets = new connection({
        movie: body.movie,
        slot: body.slot,
        seats: body.seats,
        user: req.user.id,
      });

      // Save the newly created booking record to database
      const savedTicket = await bookmovietickets.save();
      // Sending the response
      res.json(savedTicket);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = TicketBooking;
