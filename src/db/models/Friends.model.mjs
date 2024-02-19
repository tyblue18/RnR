import mongoose from "mongoose";
const { Schema, model, models, modelNames } = mongoose;

const friendSchema = new Schema({
  friend: { type: Schema.Types.ObjectId, ref: "User" },
  status: String,
});

const friendsSchema = new Schema([friendSchema], {
  timestamps: true,
});

const FriendsModel = models.Friends || model("Friends", friendsSchema);

export default FriendsModel;
