import initDB from "@/helper/initDB";
import ProductDetailData from "@/Modal/ProductDetail";
initDB();

import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const Data = await request.json();
    const { queryObject, skip, limit, sortingObj } = Data;
    console.log(Data);
    const products = await ProductDetailData.find({ ...queryObject })
      .sort({ ...sortingObj })
      .skip(skip)
      .limit(limit);
    const productsCount = await ProductDetailData.countDocuments({
      ...queryObject,
    });

    // const products = await ProductDetailData.find();
    return NextResponse.json({
      isSuccess: true,
      isError: false,
      message: "success",
      products: products,
      productsCount: productsCount,
    });
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
