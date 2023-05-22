import initDB from "@/helper/initDB";
import Blogs from "@/Modal/Blogs";
import { NextResponse } from "next/server";
initDB();

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
