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
      await SavedProduct.findOneAndRemove({
        productID,
        userId,
      });

      return NextResponse.json(
        {
          message: "Product is removed from Favourites !",
          isSuccess: true,
        },
        {
          status: 200,
        }
      );
    }
    // to Add In Database
    const productSaved = await SavedProduct.create({ ...Data });

    return NextResponse.json(
      {
        product: productSaved,
        message: "Added to Favourite !",
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
        error: error.message,
        errorMsg: "Internal Server Error",
        isSuccess: false,
      },
      {
        status: 500,
      }
    );
  }
};
