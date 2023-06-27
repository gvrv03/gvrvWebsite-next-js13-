import initDB from "@/helper/initDB";
import ProductReviews from "@/Modal/ProductReviews";
import ProductDetail from "@/Modal/ProductDetail";
initDB();

import { NextResponse } from "next/server";

// --------------To Add Product Review--------------
export const POST = async (request) => {
  try {
    const Data = await request.json();

    // to Add In Database
    const addReview = await ProductReviews.create({ ...Data });

    return NextResponse.json(
      {
        data: addReview,
        message: "Review send Successfully",
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

export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const id = searchParams.get("productID");
    const Reviews = await ProductReviews.find({ productID: id }).sort({
      createdAt: -1,
    });

    const countAllReview = await ProductReviews.countDocuments();

    return NextResponse.json(
      {
        data: Reviews,
        ReviewCount: Reviews.length,
        message: "Fetch Review Successfully",
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
