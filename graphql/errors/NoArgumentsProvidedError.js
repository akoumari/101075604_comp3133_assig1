import { UserInputError } from "apollo-server-express";

export class NoArgumentsProvidedError extends UserInputError {
  constructor() {
    super("No arguments were provided to perform an update");
  }
}
