import { RootMiddleware } from "@/helper/authMiddleware";
import initDB from "@/helper/initDB";
import Blogs from "@/Modal/Blogs";
import { NextResponse } from "next/server";
initDB();

// to fetch single Blog

export const GET = async (req, { params }) => {
  try {
    const getBlog = await Blogs.findById(params.pid);
    const update = { views: getBlog.views + 1 };
    await Blogs.findByIdAndUpdate(params.pid, update);

    return NextResponse.json(getBlog);
  } catch (error) {
    return NextResponse.json(
      {
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

// to Delete Blog
export const DELETE = RootMiddleware(async (req, { params }) => {
  try {
    const { pid } = await params;
    const deleteBlog = await Blogs.findByIdAndDelete(pid);
    if (!deleteBlog) {
      return NextResponse.json(
        {
          message: "Blog not Exists",
          isSuccess: false,
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      {
        data: deleteBlog,
        message: "Blog Deleted",
        isSuccess: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
        errorMsg: "Internal Server Error",
        isSuccess: false,
      },
      {
        status: 500,
      }
    );
  }
});
