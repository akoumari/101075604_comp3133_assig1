import { User, Group } from "../../model";
import { userValidation } from "./validation";
import {
  getFieldsForUpdate,
  validateFields,
  validateEntireSchema,
} from "../../utils";
import { hash } from "bcryptjs";
import { UserInvalidInputError } from "../errors/UserInvalidInputError";
import { EmailInUseError } from "../errors/EmailInUseError";
import { NoArgumentsProvidedError } from "../errors/NoArgumentsProvidedError";
import { NonExistentObjectUpdateError } from "../errors/NonExistentObjectUpdateError";

const UserService = {
  getAllUsers: () => {
    return User.find({});
  },

  getUserById: (id) => {
    return User.findById(id);
  },

  addUser: async (
    {
      username,
      password,
      email,
      
    }
  ) => {
    let user;

  
      user = new User({
        username,
      password,
      email,
      });
   

    if (await User.findOne({ email: email }))
      throw new EmailInUseError();
    if (await User.findOne({ username: username }))
      throw new EmailInUseError();

    // check if all the arguments passed are valid according to the defined yup schema
    const errors = await validateEntireSchema(userValidation, user);
    console.log(errors);
    if (Object.keys(errors).length > 0) throw new UserInvalidInputError(errors);

    if (user.password) {
      const hashedPassword = await hash(user.password, 12);
      user.password = hashedPassword;
    }
    return user.save();
  },

  editUser: async ({
    id,
    username,
      password,
      email,
  }) => {
    const updates = getFieldsForUpdate({
      id,
      username,
      password,
      email,
    });

    // Checks if it exists
    if (!(await User.findById(id).select("_id").lean()))
      throw new NonExistentObjectUpdateError();

    // Checks if updates were provided
    if (Object.keys(updates).length === 0) throw new NoArgumentsProvidedError();

    // Validates data against the schema
    const errors = await validateFields(userValidation, updates);
    if (Object.keys(errors).length > 0) throw new UserInvalidInputError(errors);

    if (updates.password) {
      const hashedPassword = await hash(updates.password, 12);
      updates.password = hashedPassword;
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { $set: updates },
      { new: true, useFindAndModify: false }
    );

    return updatedUser;
  },
 

};

module.exports = UserService;
