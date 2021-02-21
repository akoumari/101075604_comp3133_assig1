import { Booking } from "../../model";
import { BookingValidation } from "./validation";
import {
  getFieldsForUpdate,
  validateFields,
  validateEntireSchema,
} from "../../utils";
import { UserInvalidInputError } from "../errors/UserInvalidInputError";
import { NoArgumentsProvidedError } from "../errors/NoArgumentsProvidedError";
import { NonExistentObjectUpdateError } from "../errors/NonExistentObjectUpdateError";

const BookingService = {
  getAllBookings: () => {
    return Booking.find({});
  },

  getBookingById: (id) => {
    return Booking.findById(id);
  },

 
  bookingsByUser: (user) => {
    return Booking.find({ user: user });
  },

  addBooking: async (
    {
      hotel,
       booking_date,
      booking_start,
      booking_end,
      user
     
    }
  
  ) => {
    let booking;

  
      booking = new Booking({
        hotel,
        booking_date,
        booking_start,
        booking_end,
        user
      });
   

    
    const errors = await validateEntireSchema(BookingValidation, booking);
    console.log(errors);
    if (Object.keys(errors).length > 0) throw new UserInvalidInputError(errors);


    return booking.save();
  },

  editBooking: async ({
    id,
    hotel,
    booking_date,
    booking_start,
    booking_end,
    user
  }) => {
    const updates = getFieldsForUpdate({
      id,
      hotel,
      booking_date,
      booking_start,
      booking_end,
      user
    });

    // Checks if it exists
    if (!(await Booking.findById(id).select("_id").lean()))
      throw new NonExistentObjectUpdateError();

    // Checks if updates were provided
    if (Object.keys(updates).length === 0) throw new NoArgumentsProvidedError();

    // Validates data against the schema
    const errors = await validateFields(BookingValidation, updates);
    if (Object.keys(errors).length > 0) throw new UserInvalidInputError(errors);


    const updatedBooking = await Booking.findOneAndUpdate(
      { _id: id },
      { $set: updates },
      { new: true, useFindAndModify: false }
    );

    return updatedBooking;
  },
  

  
};

module.exports = BookingService;
