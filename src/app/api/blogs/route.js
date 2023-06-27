import { AdminMiddleware } from "@/helper/authMiddleware";
import initDB from "@/helper/initDB";
import Blogs from "@/Modal/Blogs";
initDB();

import { NextResponse } from "next/server";

// --------------To Add Blog--------------
export const POST = AdminMiddleware(async (request) => {
  try {
    const Data = await request.json();
    const { title } = Data;
    console.log(Data);
    const titleExist = await Blogs.findOne({ title });
    if (titleExist) {
      const updateBlog = await Blogs.findOneAndUpdate({ title }, Data);

      return NextResponse.json(
        {
          data: updateBlog,
          message: "Already Exits, Then Updated",
          isSuccess: true,
        },
        {
          status: 200,
        }
      );
    }
    const addBlog = await Blogs.create(Data);
    return NextResponse.json(
      {
        data: addBlog,
        message: "Blog Added Successfully",
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
        errorMsg: error,
        isSuccess: false,
      },
      {
        status: 500,
      }
    );
  }
});

// --------------To Fetch All Blogs--------------
export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const page = searchParams.get("page"); // Retrieves the value of the 'page' parameter
    const limit = searchParams.get("limit"); // Retrieves the value of the 'limit' parameter

    const skipCount = (page - 1) * limit;
    const blogCount = await Blogs.countDocuments(); // Get the total count of blogs
    const totalPages = Math.ceil(blogCount / limit); // Calculate the total number of pages
    const blogs = await Blogs.find()
      .sort({ createdAt: -1 })
      .skip(skipCount)
      .limit(limit);

    return NextResponse.json({ blogs, totalPages });
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
