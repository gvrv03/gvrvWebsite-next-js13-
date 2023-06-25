import initDB from "@/helper/initDB";
import Blogs from "@/Modal/Blogs";
initDB();

import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const Data = await request.json();
    const { queryObject, skip, limit, sortingObj } = Data;
    console.log(Data);
    const BlogsData = await Blogs.find({ ...queryObject })
      .sort({ ...sortingObj })
      .skip(skip)
      .limit(limit);
    const BlogsCount = await Blogs.countDocuments({
      ...queryObject,
    });

    // const Blogs = await ProductDetailData.find();
    return NextResponse.json({
      isSuccess: true,
      isError: false,
      message: "success",
      Blogs: BlogsData,
      BlogsCount: BlogsCount,
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
