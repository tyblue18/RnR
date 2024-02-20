import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const friendSchema = new Schema({
  friend: { type: Schema.Types.ObjectId, ref: "User" },
  status: String, // ['invited', 'pending', 'active', 'blocked']
});

const userSchema = new Schema(
  {
    name: String,
    email: String,
    phoneNumber: String,
    friends: [friendSchema],
  },
  {
    timestamps: true,
  }
);

export const FriendModel = models.Friend || model("Friend", friendSchema);
export const UserModel = models.User || model("User", userSchema);
