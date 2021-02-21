// for non-embedded Object type
// used to update mutation
export const deleteCollection = async (id, schema) => {
  return await schema
    .findOneAndUpdate(
      { _id: id },
      { $set: { isDeleted: true } },
      { new: true, useFindAndModify: false }
    )
    .exec()
    .then((type) => type)
    .catch((err) => console.error(err));
};
