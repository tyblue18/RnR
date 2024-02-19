import { connectToMongo } from "../libs/mongo.lib.mjs";
import UserModel from "./models/User.model.mjs";
import FriendsModel from "./models/Friends.model.mjs";

async function createUser(name, email, phoneNumber) {
  const friendsList = await FriendsModel.create({});

  const user = await UserModel.create({
    name,
    email,
    date: Date(),
    phoneNumber,
    friends: friendsList._id,
  });

  return user;
}

export async function createSeedData() {
  await connectToMongo();

  await createUser("Ragum Pirani", "Ragum@bot.com", "331-786-6996");
  await createUser("Meezu Express", "Meezu@bot.com", "420-666-7860");
  await createUser("Abid Yay", "Abid@bot.com", "911-404-2001");

  return;
}

await createSeedData();
process.exit();
