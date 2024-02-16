db.createCollection("Users");

db.Users.insertMany([
  {
    name: "Ragum Pirani",
    email: "Ragum@bot.com",
    date: Date(),
    phoneNumber: "331-786-6996",
  },
  {
    name: "Meezu Express",
    email: "Meezu@bot.com",
    date: Date(),
    phoneNumber: "420-666-7860",
  },
  {
    name: "Abid Yay",
    email: "Abid@bot.com",
    date: Date(),
    phoneNumber: "911-404-2001",
  },
]);
