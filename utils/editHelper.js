export const editHelper = (args, type) => {
  let set = {};
  for (let key in args) {
    if (args[key] != undefined) {
      Object.assign(set, { [`${type}.$.${key}`]: args[key] });
    }
  }
  return { $set: set };
};
