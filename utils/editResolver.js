// action: delete => delete embedded document by setting isDeleted to true
// action: edit => edit embedded document
export const editResolver = (
  action,
  Schema,
  parentFilter,
  childFilter,
  type,
  update
) => {
  if (action === "edit") {
    return Schema.findOneAndUpdate(
      { _id: parentFilter, [`${type}._id`]: childFilter },
      update,
      { new: true, useFindAndModify: false }
    )
      .exec()
      .then((doc) => doc)
      .catch((err) => console.error(err));
  } else if (action === "delete") {
    return Schema.findOneAndUpdate(
      { _id: parentFilter, [`${type}._id`]: childFilter },
      { $set: { [`${type}.$.isDeleted`]: true } },
      { new: true, useFindAndModify: false }
    )
      .exec()
      .then((doc) => doc)
      .catch((err) => console.error(err));
  }
};
