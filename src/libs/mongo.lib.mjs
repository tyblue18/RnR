import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const MONGODB_URI = process.env.MONGODB_URI;

let db;
try {
  db = await mongoose.connect(MONGODB_URI);
} catch (err) {
  console.error("Unable to connect to the database ", err);
}

export default db;
