import { ApolloError } from "apollo-server-express";

export class NonExistentObjectUpdateError extends ApolloError {
  constructor() {
    super(
      "Object that was supposed to be updated currently does not exist",
      "NON_EXISTENT_OBJECT_INVALID_UPDATE"
    );
  }
}
