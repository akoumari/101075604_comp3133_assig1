import { ApolloError } from "apollo-server-express";

export class UnexpectedError extends ApolloError {
  constructor() {
    super("Unexpected error", "UNEXPECTED_ERROR");
  }
}
