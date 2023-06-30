import initDB from "@/helper/initDB";
import razorpayConfig from "@/config/razorpayConfig";
import ProductDetail from "@/Modal/ProductDetail";
initDB();

import { NextResponse } from "next/server";

// --------------To Create Product --------------
export const POST = async (request) => {
  try {
    const options = await request.json();
    console.log(options);
    const response = await razorpayConfig.orders.create(options);

    return NextResponse.json(
      {
        data: response,
        message: "Order Create",
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

// order_M7zOqZhwY5oLcN
