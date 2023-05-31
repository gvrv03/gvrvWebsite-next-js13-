import initDB from "@/helper/initDB";
import User from "@/Modal/User";
initDB();

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const Data = await request.json();
    console.log(Data);
    const { firebaseID } = Data;
    const checkUser = await User.findOne({ firebaseID });

    if (checkUser) {
      return NextResponse.json(
        { msg: "User Already exists" },
        {
          status: 208,
        }
      );
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