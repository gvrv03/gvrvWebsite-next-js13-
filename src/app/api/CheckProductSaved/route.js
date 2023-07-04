import initDB from "@/helper/initDB";
import SavedProduct from "@/Modal/SavedProduct";
initDB();

import { NextResponse } from "next/server";

// --------------To Saved Product--------------
export const POST = async (request) => {
  try {
    const Data = await request.json();
    // productID, userId;
    const { productID, userId } = Data;

    const checkExist = await SavedProduct.findOne({ productID, userId });

    if (checkExist) {
      return NextResponse.json(
        {
          isSuccess: true,
          isSaved: true,
        },
        {
          status: 200,
        }
      );
    }
    return NextResponse.json(
      {
        isSaved: false,
        isSuccess: true,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        error: "Internal Server Error",
        errorMsg: error.message,
        isSuccess: false,
      },
      {
        status: 500,
      }
    );
  }
};
