import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const uniqueValidator = require("mongoose-unique-validator");

const usersSchema = new Schema(
  {
    name_user: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

usersSchema.plugin(uniqueValidator);
usersSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

usersSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}
export default model("Users", usersSchema);
