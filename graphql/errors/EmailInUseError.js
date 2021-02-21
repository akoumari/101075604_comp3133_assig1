import { ApolloError } from "apollo-server-express";

export class EmailInUseError extends ApolloError {
  constructor() {
    super("Email already in use", "EMAIL_IN_USE");
  }
}
