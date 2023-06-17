"use client";
import BlogSkeleton from "@/Components/BlogSkeleton";
import { Skeleton } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <section className="flex flex-col gap-5">
      <Skeleton variant="rectangular" width="100%" height={60} />
      <div className=" grid grid-cols-1  h-90 md:grid-cols-4 gap-5 justify-between overflow-y-scroll flex-wrap ">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    </section>
  );
};

export default loading;
