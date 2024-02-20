import { connectToMongo } from "../libs/mongo.lib.mjs";
import { UserModel, FriendModel } from "./models/User.model.mjs";

async function createUser(name, email, phoneNumber) {
  const user = await UserModel.create({
    name,
    email,
    date: Date(),
    phoneNumber,
    friends: [],
  });

  return user;
}

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
  await connectToMongo();

  const ragum = await createUser(
    "Ragum Pirani",
    "Ragum@bot.com",
    "331-786-6996"
  );
  const meezu = await createUser(
    "Meezu Express",
    "Meezu@bot.com",
    "420-666-7860"
  );
  await createUser("Abid Yay", "Abid@bot.com", "911-404-2001");

  await addFriend(ragum, meezu);
}

await createSeedData();
process.exit();
