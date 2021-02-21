const { on } = require("nodemon");
const yup = require("yup");

const phone = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const onlyAlpha = /^[A-Za-z ]*$/;

const HotelValidation = yup.object().shape({
  hotel_name: yup.string().required(),
  street: yup.string().required(),
  city: yup.string().required(),
  postal_code: yup.string().nullable(),
  price: yup.number().required(),
  email: yup.string().required(),
  
});

module.exports = { HotelValidation };
