const yup = require("yup");
const formatYupError = require("./formatYupError");

const validateFields = (yupSchema, updates) => {
  const keys = Object.keys(updates);
  const errors = [];
  return Promise.all(
    keys.map((key) =>
      yup
        .reach(yupSchema, key)
        .validate(updates[key], { abortEarly: false })
        .catch((err) => errors.push(...formatYupError(err, key)))
    )
  ).then((res) => {
    return errors;
  });
};

module.exports = validateFields;
