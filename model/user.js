const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema(
  {
    username: { type: Schema.Types.String, required: true, unique: true },
    email: { type: Schema.Types.String, unique: true  },
    password: { type: Schema.Types.String },
  },
  { timestamps: true }
);
module.exports = UserSchema;