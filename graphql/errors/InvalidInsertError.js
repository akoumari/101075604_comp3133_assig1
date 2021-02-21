import { ApolloError } from "apollo-server-express";

export class InvalidInserError extends ApolloError {
  constructor() {
    super(
      "Invalid insert, object to be added is already present",
      "INVALID_INSERT"
    );
  }
}
