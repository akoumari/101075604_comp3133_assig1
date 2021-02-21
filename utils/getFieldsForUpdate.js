export const getFieldsForUpdate = (args) => {
  const entries = Object.keys(args);
  const updates = {};

  for (let i = 0; i < entries.length; i++) {
    if (entries[i] !== "id") {
      if (Object.values(args)[i] !== undefined) {
        updates[entries[i]] = Object.values(args)[i];
      }
    }
  }
  return updates;
};
