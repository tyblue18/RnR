import { NextResponse } from "next/server";

import db from "@/libs/mongo.lib.mjs";
import { UserModel } from "@/db/models/User.model.mjs";

export async function GET(request, { params }) {
  console.log("GET /api/user/[userId]/friends");
  const userId = params.userId;

  const { friends } = await UserModel.findOne({ _id: userId }, "friends -_id")
    .populate({
      path: "friends",
      populate: { path: "friend", select: "name email image -_id" },
    })
    .exec();

  return NextResponse.json(friends, { status: 200 });
}

export async function POST(request, { params }) {
  console.log("POST /api/user/[userId]/friends");
}
