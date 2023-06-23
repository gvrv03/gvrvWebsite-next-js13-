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
export const GET = async (req, res) => {
  try {
    const blog = await Blogs.find();
    return NextResponse.json(blog);
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
