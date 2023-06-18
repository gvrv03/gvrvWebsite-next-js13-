import initDB from "@/helper/initDB";
import Blogs from "@/Modal/Blogs";
import { NextResponse } from "next/server";
initDB();

// to fetch single Blog

export async function GET(req, { params }) {
  try {
    const getBlog = await Blogs.findById(params.pid);
    const update = { views: getBlog.views + 1 };
    await Blogs.findByIdAndUpdate(params.pid, update);

    return NextResponse.json(getBlog);
  } catch (error) {
    return NextResponse.json({ body: { msg: "Internal Server Error" } });
  }
}

// to Delete Blog
export async function DELETE(req, { params }) {
  try {
    const { pid } = await params;
    const deleteBlog = await Blogs.findByIdAndDelete(pid);
    if (!deleteBlog) {
      return NextResponse.json(
        {
          data: null,
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
