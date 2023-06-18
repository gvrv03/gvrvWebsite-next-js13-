import initDB from "@/helper/initDB";
import Blogs from "@/Modal/Blogs";
initDB();

import { NextResponse } from "next/server";

// --------------To Add Blog--------------
export async function POST(request) {
  try {
    const Data = await request.json();
    const { title } = Data;
console.log(Data);
    const titleExist = await Blogs.findOne({ title });
    if (titleExist) {
      return NextResponse.json(
        {
          data: null,
          message: "This Title Already Exits",
          isSuccess: false,
        },
        {
          status: 400,
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
        error: error,
        errorMsg: "Internal Server Error",
        isSuccess: false,
      },
      {
        status: 500,
      }
    );
  }
}

// --------------To Fetch All Blogs--------------
export async function GET(req, res) {
  try {
    const blog = await Blogs.find();
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        error: error,
        errorMsg: "Internal Server Error",
        isSuccess: false,
      },
      {
        status: 500,
      }
    );
  }
}

