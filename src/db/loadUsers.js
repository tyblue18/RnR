db.createCollection("Users");

db.Users.insertMany([
  {
    name: "Ragum Pirani",
    email: "Ragum@bot.com",
    date: Date(),
  },
  {
    name: "Meezu Express",
    email: "Meezu@bot.com",
    date: Date(),
  },
  {
    name: "Abid Yay",
    email: "Abid@bot.com",
    date: Date(),
  },
]);
