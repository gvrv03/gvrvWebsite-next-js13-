import initDB from "@/helper/initDB";
import Blogs from "@/Modal/Blogs";
initDB();

import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const blog = await Blogs.find();
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
}

// export default async (req, res) => {
//   switch (req.method) {
//     case "GET":
//       await fetchBlog(req, res);
//       break;
//     case "POST":
//       await addBlog(req, res);
//       break;
//   }
// };

// // To Add Blogs
// const addBlog = async (req, res) => {
//   const { title, category, author, image, description, artical } = req.body;

//   try {
//     const blog = await new Blogs({
//       title,
//       category,
//       author,
//       image,
//       description,
//       artical,
//     }).save();
//     res.status(201).json(blog);
//   } catch (err) {
//     res.status(500).json({ error: "internal server error" });
//   }
// };

// // Fetch All Blogs
// const fetchBlog = async (req, res) => {
//   try {
//     const blog = await Blogs.find();
//     res.status(200).json(blog);
//   } catch (err) {
//     console.log(err);
//   }
// };
