const { on } = require("nodemon");
const yup = require("yup");

const phone = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const onlyAlpha = /^[A-Za-z ]*$/;

const userValidation = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().nullable(),
});

module.exports = { userValidation };
