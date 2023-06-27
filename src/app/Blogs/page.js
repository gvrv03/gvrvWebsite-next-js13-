"use client";
import AllBlogs from "@/Components/AllBlogs";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Blogs = () => {
  const [page, setpage] = useState(1);
  return (
    <div className="h-full ">
      <AllBlogs page={page} setpage={setpage} />
    
    </div>
  );
};

export default Blogs;
