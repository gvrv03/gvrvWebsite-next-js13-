import initDB from "@/helper/initDB";
import razorpayConfig from "@/config/razorpayConfig";
import ProductDetail from "@/Modal/ProductDetail";
initDB();

import { NextResponse } from "next/server";

// --------------To Create Product --------------
export const POST = async (request) => {
  try {
    const { OID } = await request.json();

    const order = await razorpayConfig.payments.fetch(OID);
    if (order) {
      return NextResponse.json(
        {
          data: order,
          message: "Payment Sccess",
          isSuccess: true,
        },
        {
          status: 200,
        }
      );
    }
    return NextResponse.json(
      {
        data: null,
        error: "Order not Found",
        isSuccess: false,
      },
      {
        status: 404,
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
