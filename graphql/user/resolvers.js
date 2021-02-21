import { ForbiddenError } from "apollo-server-express";
import UserService from "./service";

const resolvers = {
  Query: {
    users: (_, args) => {

      return UserService.getAllUsers();
    },
    user: (_, { id }) => {
      if (!auth.isAuth || (auth.role !== "ROLE_FACILITATOR" && auth.role !== "ROLE_ADMIN") )
        throw new ForbiddenError();
      return UserService.getUserById(id);
    },
  },
  Mutation: {
    addUser: (
      _,
      {
        username,
        password,
        email,
      }
    ) => {
      return UserService.addUser(
        {
          username,
          password,
          email,
        }
      );
    },
    editUser: (
      _,
      {
        id,
        username,
      password,
      email,
      }
    ) => {
      
      return UserService.editUser({
        id,
        username,
      password,
      email,
      });
    },
  },
  
};

module.exports = {
  resolvers,
};
