import { UserInputError } from "apollo-server-express";

export class UserInvalidInputError extends UserInputError {
  constructor(errors) {
    super("Invalid arguments", {
      invalidArgs: errors,
    });
  }
}
