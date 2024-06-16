import { NextResponse } from "next/server";

import db from "@/libs/mongo.lib.mjs";
import { UserModel, addFriend } from "@/db/models/User.model.mjs";

export async function GET(request, { params }) {
  console.log("GET /api/user/[userId]/friends");
  const userId = params.userId;

  const user = await UserModel.findById(userId, "friends -_id")
    .populate({ path: "friends.$*.friend", select: "name -_id" })
    .exec();

  if (!user)
    return NextResponse.json({ error: "No user found!" }, { status: 400 });

  return NextResponse.json(user.friends, { status: 200 });
}

export async function POST(request, { params }) {
  console.log("POST /api/user/[userId]/friends");
  console.log(await request.json());

  const { friendId } = await request.json();

  if (!(await addFriend(friendId, userId))) {
    return NextResponse.json(
      { error: "Adding friend failed" },
      { status: 503 }
    );
  }

  return NextResponse.json({}, { status: 200 });
}
