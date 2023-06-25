"use client";
import BlogsHeader from "@/Components/BlogsHeader";
import BlogSkeleton from "@/Components/BlogSkeleton";
import React from "react";

const LoadingBlogs = () => {
  return (
   <>
   <BlogsHeader/>
    <section className=" mt-36 grid grid-cols-2 md:grid-cols-4 gap-5 ">
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
    </section></>
  );
};

export default LoadingBlogs;
