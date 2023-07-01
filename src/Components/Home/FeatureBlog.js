"use client";
import { fetchBlogs, fetchBlogsByQueryObj } from "@/Store/Actions/blogAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../BlogCard";
import BlogSkeleton from "../BlogSkeleton";
import HeaderName from "./HeaderName";

const FeatureBlog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchBlogsByQueryObj({
        queryObj: {},
        skip: 0,
        limit: 3,
        sortObj: {},
      })
    );
  }, [dispatch]);

  const blogs = useSelector((state) => state.blogs);
  return (
    <div className="   m-auto">
      <HeaderName name="Blog" />
      {blogs.data.length === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs &&
          blogs.data.map((item) => {
            return (
              <BlogCard
                image={item.image}
                fullTitle={item.title}
                category={item.category}
                title={item.title.substring(0, 80)}
                description={item.description.substring(0, 100) + "..."}
                key={item._id}
                id={item._id}
                views={item.views}
              />
            );
          })}
      </div>
    </div>
  );
};
export default FeatureBlog;
