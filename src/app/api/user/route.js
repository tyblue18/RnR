import { NextResponse } from "next/server";

import db from "@/libs/mongo.lib.mjs";
import { UserModel } from "@/db/models/User.model.mjs";

export async function GET(request) {
  console.log("GET /api/user");
  const name = request.nextUrl.searchParams.get("name");

  try {
    await db;
    let users;

    const regex = new RegExp(name, "i");
    if (!name) {
      users = await UserModel.find({})
        .populate({ path: "friends.$*.friend", select: "name -_id" })
        .exec();
    } else {
      users = await UserModel.find(
        {
          $or: [{ email: regex }, { name: regex }],
        },
        { _id: 0 }
      )
        .populate({ path: "friends.$*.friend", select: "name -_id" })
        .exec();
    }

    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { message: "Failed to send message " },
      { status: 500 }
    );
  }
}
