import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Hotel {
    id: ID
    hotel_name: String
    street: String
    city: String
    postal_code: String
    price: Int
    email: String
    user: User
  }

  extend type Query {
    hotel(id: ID!): Hotel
    hotels: [Hotel]
    hotelByName(hotel_name: String): [Hotel]
    hotelByCity(city: String): [Hotel]
  }

  extend type Mutation {
    addHotel(
      hotel_name: String!
      street: String!
      city: String!
      postal_code: String!
      price: Int!
      email: String!
      user: ID!
    ): Hotel

    editHotel(
      id: ID!
      hotel_name: String
      street: String
      city: String
      postal_code: String
      price: Int
      email: String
      user: ID
    ): Hotel
  }
`;

module.exports = {
  typeDefs,
};
