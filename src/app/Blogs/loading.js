"use client";
import BlogsHeader from "@/Components/BlogsHeader";
import BlogSkeleton from "@/Components/BlogSkeleton";
import { Skeleton } from "@mui/material";
import React from "react";

const LoadingBlogs = () => {
  return (
    <>
      <BlogsHeader />
      <section className=" mt-[141px] grid grid-cols-2 md:grid-cols-4 gap-5 ">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </section>

      <div className="w-full mt-5 flex justify-between">
        <Skeleton variant="rectangular" width="80px" height={30} />
        <Skeleton variant="rectangular" width="80px" height={30} />
      </div>
    </>
  );
};

export default LoadingBlogs;
