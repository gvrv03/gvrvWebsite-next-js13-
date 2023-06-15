import initDB from "@/helper/initDB";
import User from "@/Modal/User";
initDB();

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const Data = await request.json();
    const { firebaseID } = Data;
    const checkUser = await User.findOne({ firebaseID });

    if (checkUser) {
      const updateUser = await User.findOneAndUpdate({ firebaseID }, Data);
      return NextResponse.json(updateUser);
    }
    const userAdd = await User.create(Data);
    return NextResponse.json(userAdd);
  } catch (error) {
    return NextResponse.json(
      { msg: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const allUser = await User.find();
    return NextResponse.json(allUser);
  } catch (error) {
    return NextResponse.json(
      { msg: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
