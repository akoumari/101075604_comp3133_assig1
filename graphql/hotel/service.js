import { Hotel } from "../../model";
import { HotelValidation } from "./validation";
import {
  getFieldsForUpdate,
  validateFields,
  validateEntireSchema,
} from "../../utils";
import { UserInvalidInputError } from "../errors/UserInvalidInputError";
import { NoArgumentsProvidedError } from "../errors/NoArgumentsProvidedError";
import { NonExistentObjectUpdateError } from "../errors/NonExistentObjectUpdateError";

const HotelService = {
  getAllHotels: () => {
    return Hotel.find({});
  },

  getHotelById: (id) => {
    return Hotel.findById(id);
  },

 
  hotelByName: (name) => {
    return Hotel.find({ name: name });
  },
  hotelByCity: (city) => {
    return Hotel.find({ city: city });
  },

  addHotel: async (
    {
      hotel_name,
      street,
      city ,
      postal_code,
      price,
      email,
      user,
     
    }
  
  ) => {
    let hotel;

  
      hotel = new Hotel({
        hotel_name,
        street,
        city ,
        postal_code,
        price,
        email,
        user,
      });
   

    
    const errors = await validateEntireSchema(HotelValidation, hotel);
    console.log(errors);
    if (Object.keys(errors).length > 0) throw new UserInvalidInputError(errors);


    return hotel.save();
  },

  editHotel: async ({
    hotel_name,
    street,
    city,
    postal_code,
    price,
    email,
    user
  }) => {
    const updates = getFieldsForUpdate({
      hotel_name,
    street,
    city,
    postal_code,
    price,
    email,
    user
    });

    // Checks if it exists
    if (!(await Hotel.findById(id).select("_id").lean()))
      throw new NonExistentObjectUpdateError();

    // Checks if updates were provided
    if (Object.keys(updates).length === 0) throw new NoArgumentsProvidedError();

    // Validates data against the schema
    const errors = await validateFields(HotelValidation, updates);
    if (Object.keys(errors).length > 0) throw new UserInvalidInputError(errors);


    const updatedHotel = await Hotel.findOneAndUpdate(
      { _id: id },
      { $set: updates },
      { new: true, useFindAndModify: false }
    );

    return updatedHotel;
  },
  

  
};

module.exports = HotelService;
