import { ApolloError } from "apollo-server-express";

export class ObjectDoesNotExistError extends ApolloError {
  constructor(obj = "Object", id = "ID") {
    super(`${obj} with the given ${id} does not exist`, "OBJECT_DOES_NOT_EXIST");
  }
}
