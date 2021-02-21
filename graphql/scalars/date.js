import { gql } from "apollo-server-express";
import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import dayjs from "dayjs";

const typeDefs = gql`
  scalar DateISO
`;

const resolvers = {
  DateISO: new GraphQLScalarType({
    name: "DateISO",
    description: "Date custom scalar type using Date ISO String format",
    parseValue(value) {
      return dayjs(value); // value from the client
    },
    serialize(value) {
      return dayjs(value).toISOString(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return dayjs(ast.value); // ast value is always in string format
      }
      return null;
    },
  }),
};

module.exports = { typeDefs, resolvers };
