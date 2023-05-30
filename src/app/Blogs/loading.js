"use client";
import BlogSkeleton from "@/Components/BlogSkeleton";
import React from "react";

const loading = () => {
  return (
    <section className="mt-5 grid grid-cols-1  h-90 md:grid-cols-3 gap-5 justify-between overflow-y-scroll flex-wrap ">
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
      <BlogSkeleton />
    </section>
  );
};

export default loading;
