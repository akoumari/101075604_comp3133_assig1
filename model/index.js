const mongoose = require("mongoose");

const UserSchema = require("./user");
const HotelSchema = require("./hotel");
const BookingSchema = require("./booking");


module.exports = {
  User: mongoose.model("User", UserSchema),
  Hotel: mongoose.model("Hotel", HotelSchema),
  Booking: mongoose.model("Booking", BookingSchema),
};
