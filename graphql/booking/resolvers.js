import { ForbiddenError } from "apollo-server-express";
import BookingService from "./service";

const resolvers = {
  Query: {
    bookings: (_, args) => {
    
      return BookingService.getAllBookings();
    },
    booking: (_, { id }) => {
      return BookingService.getBookingById(id);
    },  
    bookingsByUser: (_, { user }) => {
      return BookingService.bookingsByUser(user);
    },

  },
  Mutation: {
    addBooking: (
      _,
      {
        hotel,
        booking_date,
        booking_start,
        booking_end,
        user
      },
     
    ) => {

      return BookingService.addBooking(
        {
          hotel,
          booking_date,
      booking_start,
      booking_end,
      user
        },
      );
    },
    editBooking: (
      _,
      {
        id,
        hotel,
    booking_date,
    booking_start,
    booking_end,
    user
      }
    ) => {

      return BookingService.editBooking({
        id,
        hotel,
        booking_date,
        booking_start,
        booking_end,
        user
      });
    }, 
  },
  Booking: {
    user: async (_, args, ) => {
      return (await _.populate("user").execPopulate()).user;
    },
    hotel: async (_, args, ) => {
      return (await _.populate("hotel").execPopulate()).hotel;
    },
  },
};

module.exports = {
  resolvers,
};
