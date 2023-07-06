import initDB from "@/helper/initDB";
import User from "@/Modal/User";
import bcrypt from "bcrypt";
initDB();

const saltRounds = 10;

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const Data = await request.json();
    const { email, name, password } = Data;

    const checkUser = await User.findOne({ email });

    if (checkUser) {
      return NextResponse.json({
        isSuccess: false,
        userExist: true,
        error: "User Already Exists",
      });
    }

    const userAdd = await User.create({
      email,
      image:"/img/maleUser",
      name,
      password: await bcrypt.hash(password, saltRounds),
    });
    return NextResponse.json({
      isSuccess: true,
      User: userAdd,
      userExist: false,
      message: "Sign Up SuccessFull",
    });
  } catch (error) {
    return NextResponse.json(
      {
        isSuccess: false,
        error: "Internal Server Error",
        errorMsg: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export const GET = async (request) => {
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
};
