const formatYupError = require("./formatYupError");

const validateEntireSchema = (schema, data) => {
  return schema
    .validate(data, { abortEarly: false })
    .then((res) => [])
    .catch((err) => {
      return formatYupError(err);
    });
};

module.exports = validateEntireSchema;
