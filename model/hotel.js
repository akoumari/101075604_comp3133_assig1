const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const HotelSchema = new Schema(
  {
    hotel_name: { type: Schema.Types.String},
    street: { type: Schema.Types.String},
    city: { type: Schema.Types.String},
    postal_code: { type: Schema.Types.String},
    price: { type: Schema.Types.Number},
    email: { type: Schema.Types.String},
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
module.exports = HotelSchema;