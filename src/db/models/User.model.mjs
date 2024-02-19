import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
    friends: { type: Schema.Types.ObjectId, ref: "Friends" },
  },
  {
    timestamps: true,
  }
);

const UserModel = models.User || model("User", userSchema);

export default UserModel;
