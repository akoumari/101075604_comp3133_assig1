import HotelService from "./service";

const resolvers = {
  Query: {
    hotels: (_, args) => {
    
      return HotelService.getAllHotels();
    },
    hotel: (_, { id }) => {
      return HotelService.getHotelById(id);
    },  
    hotelByName: (_, { name }) => {
      return HotelService.hotelByName(name);
    },
    hotelByCity: (_, { city }) => {
      return HotelService.hotelByCity(city);
    },

  },
  Mutation: {
    addHotel: (
      _,
      {
        hotel_name,
    street,
    city,
    postal_code,
    price,
    email,
    user
      },
     
    ) => {
      return HotelService.addHotel(
        {
          hotel_name,
    street,
    city,
    postal_code,
    price,
    email,
    user
        },
      );
    },
    editHotel: (
      _,
      {
        id,
        hotel_name,
        street,
        city,
        postal_code,
        price,
        email,
        user
      }
    ) => {
     
      return HotelService.editHotel({
        id,
        hotel_name,
        street,
        city,
        postal_code,
        price,
        email,
        user
      });
    }, 
  },
  Hotel: {
    user: async (_, args, ) => {
      return (await _.populate("user").execPopulate()).user;
    },
  },
};

module.exports = {
  resolvers,
};
