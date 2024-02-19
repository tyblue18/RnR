import mongoose from "mongoose";
import { NextResponse } from "next/server";

import { connectToMongo } from "@/libs/mongo.lib.mjs";
import UserModel from "@/db/models/User.model.mjs";

export async function GET(request) {
  try {
    await connectToMongo();

    const regex = new RegExp(name, "i");
    const users = await UserModel.find({
      $or: [{ email: regex }, { name: regex }],
    });

    users.forEach();

    await mongoose.connection.close();
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    console.error(err);

    await mongoose.connection.close();
    return NextResponse.json(
      { message: "Failed to send message " },
      { status: 500 }
    );
  }
}
