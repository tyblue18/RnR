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
    image: String,
    friends: {
      type: Map,
      of: friendSchema,
    },
    spicy: Number, // ["wimp", "scardy-cat", "basic", "sturdy", "daredevil", ]
    sweet: Number, // ["Not a sweetheart", "that's too sweet for me", "basic",  "Sugarbugar", "Sweetheart"]
    savory: Number, // ["???", "", "basic", "", "heart attack"]
    sour: Number, // ["sourless", "basic", "sourhead"]
    likesGiven: Number,
  },
  {
    timestamps: true,
  }
);

export function createUser(user) {
  const model = {
    name: user.name,
    email: user.email,
    image: user.image,
    date: Date(),
    phoneNumber: user?.phoneNumber || null,
    friends: {},
    spicy: user?.spicy || 0,
    sweet: user?.sweet || 0,
    savory: user?.savory || 0,
    sour: user?.sour || 0,
    likesGiven: 0,
  };

  return model;
}

export async function createUserModel(user) {
  return await UserModel.create(createUser(user));
}

export async function addFriend(person1, person2) {
  const friend1 = await FriendModel.create({
    friend: person2._id,
    status: "invited",
  });
  const friend2 = await FriendModel.create({
    friend: person1._id,
    status: "pending",
  });

  person1.friends.set(person2._id, friend1);
  person2.friends.set(person1._id, friend2);

  await person1.save();
  await person2.save();
}

export const FriendModel = models.Friend || model("Friend", friendSchema);
export const UserModel = models.User || model("User", userSchema);
