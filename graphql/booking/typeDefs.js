import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Booking {
    id: ID
    hotel: Hotel
    booking_date: DateISO
    booking_start: DateISO
    booking_end: DateISO
    user: User
  }

  extend type Query {
    booking(id: ID!): Booking
    bookingsByUser(user: ID!): [Booking]
    bookings: [Booking]
  }

  extend type Mutation {
    addBooking(
      hotel: ID!
      booking_date: DateISO!
      booking_start: DateISO!
      booking_end: DateISO!
      user: ID!
    ): Booking

    editBooking(
      hotel: ID!
      booking_date: DateISO!
      booking_start: DateISO!
      booking_end: DateISO!
      user: ID!
    ): Booking

  }
`;

module.exports = {
  typeDefs,
};
