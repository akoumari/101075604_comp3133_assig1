const formatYupError = (err, path) => {
  const errors = [];
  err.inner.forEach((e) => {
    errors.push({
      path: path ? path : e.path,
      message: e.message,
    });
  });

  return errors;
};

module.exports = formatYupError;
