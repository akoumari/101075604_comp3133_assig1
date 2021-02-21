import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID
    username: String
    password: String
    email: String
  }

  extend type Query {
    user(id: ID!): User
    users: [User]

  }

  extend type Mutation {
    addUser(
      username: String!
      password: String!
      email: String!
    ): User

    editUser(
      id: ID!
      username: String
      password: String
      email: String
    ): User
  }
`;

module.exports = {
  typeDefs,
};
