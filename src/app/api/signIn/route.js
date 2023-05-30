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
// // To Add Users
// const signUpUser = async (req, res) => {
//   const { userPhoto, fName, email, password, firebaseID } = req.body;

//   try {
//     const credentail = {
//       userPhoto,
//       email,
//       password,
//       fName,
//       firebaseID,
//     };

//     const user = await User.findOne({ "credentails.firebaseID": firebaseID });

//     if (user) {
//       return res.status(200).json({ error: "Already Exists" });
//     }

//     const userStatus = await new User({
//       credentails: credentail,
//       "basicDetails.fName": fName,
//     }).save();
//     return res.status(201).json({ msg: "Account Created", userStatus });
//   } catch (err) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getUsers = async (req, res) => {
//   try {
//     const getAllUsers = await User.find();
//     res.status(200).json(getAllUsers);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
