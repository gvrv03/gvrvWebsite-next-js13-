import initDB from "@/helper/initDB";
import User from "@/Modal/User";
initDB();

import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     const Data = await request.json();
//     console.log(Data);
//     const { firebaseID } = Data;
//     const checkUser = await User.findOne({ firebaseID });

//     if (checkUser) {
//       return NextResponse.json(
//         { msg: "User Already exists" },
//         {
//           status: 208,
//         }
//       );
//     }
//     const userAdd = await User.create(Data);
//     return NextResponse.json(userAdd);
//   } catch (error) {
//     return NextResponse.json(
//       { msg: "Internal Server Error" },
//       {
//         status: 500,
//       }
//     );
//   }
// }

export async function GET(req, { params }) {
  try {
    const getUser = await User.findOne({ _id: params.fid });
    if (!getUser) {
      return NextResponse.json({ msg: "No User Found" }, { status: 404 });
    }
    return NextResponse.json(getUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ body: { msg: "Internal Server Error" } });
  }
}
