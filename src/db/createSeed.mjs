import db from "../libs/mongo.lib.mjs";
import {
  UserModel,
  FriendModel,
  createUserModel,
  addFriend,
} from "./models/User.model.mjs";

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
