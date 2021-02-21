const { on } = require("nodemon");
const yup = require("yup");


const BookingValidation = yup.object().shape({

  booking_date: yup.date().required(),
  booking_start: yup.date().required(),
  booking_end: yup.date().required(),
 
});

module.exports = { BookingValidation };
