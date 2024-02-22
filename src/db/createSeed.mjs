import db from "../libs/mongo.lib.mjs";
import {
  UserModel,
  FriendModel,
  createUserModel,
} from "./models/User.model.mjs";

async function addFriend(person1, person2) {
  const friend1 = await FriendModel.create({
    friend: person2._id,
    status: "invited",
  });
  const friend2 = await FriendModel.create({
    friend: person1._id,
    status: "pending",
  });

  person1.friends.push(friend1);
  person2.friends.push(friend2);

  await person1.save();
  await person2.save();
}

export async function createSeedData() {
  await db;

  const ragum = await createUserModel({
    name: "Ragum Hirjani",
    email: "RAYRAY@gmail.com",
    phoneNumber: "865-420-6969",
    image: "https://cdn-icons-png.flaticon.com/512/4081/4081796.png",
    spicy: 1,
    sweet: 4,
    savory: 3,
    sour: 2,
  });

  const meezu = await createUserModel({
    name: "Meezu Express",
    email: "Meezu@bot.com",
    phoneNumber: "420-666-7860",
    image: "https://cdn-icons-png.flaticon.com/512/4786/4786827.png",
    spicy: 2,
    sweet: 3,
    savory: 1,
    sour: 3,
  });

  await createUserModel({
    name: "Abid Yay",
    email: "Abid@bot.com",
    phoneNumber: "911-404-2001",
    image: "https://cdn-icons-png.flaticon.com/512/2341/2341813.png",
    spicy: 4,
    sweet: 3,
    savory: 2,
    sour: 1,
  });

  await addFriend(ragum, meezu);
}

await createSeedData();
process.exit();
