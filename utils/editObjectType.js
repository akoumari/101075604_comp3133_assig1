// for non-embedded Object type
// used to update mutation
export const editObjectType = async (id, updates, schema) => {
  return await schema
    .findOneAndUpdate(
      { _id: id },
      { $set: updates },
      { new: true, useFindAndModify: false }
    )
    .exec()
    .then((type) => type)
    .catch((err) => console.error(err));
};
