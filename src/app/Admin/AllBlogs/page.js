"use client";
import { FullScreenLoader } from "@/Components/Spinner/LoadingSpinner";
import BlogsTable from "@/Components/Table/BlogsTable";
import { AdminPageHeader, NoDataFound } from "@/Components/UtilComponent";
import { fetchBlogs } from "@/Store/Actions/blogAction";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllBlogs = () => {
  const dispatch = useDispatch();
  const [forDelete, setforDelete] = useState({ state: false, id: "" });
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const router = useRouter();

  const blogs = useSelector((state) => state.blogs);
  const { isLoading, error } = blogs;

  return (
    <>
      <div className="  ">
        <AdminPageHeader
          pageName="All Blogs"
          totalCount={blogs.data.length}
          refreshFun={() => {
            dispatch(fetchBlogs());
          }}
          routeLocation="/Admin/CreatePost"
          btnName="Create Post"
        />

        {error && <div className="  p-5 mt-5">Unexpected error occured !</div>}
        {isLoading && <FullScreenLoader />}
        {!isLoading && blogs.data.length === 0 ? (
          <NoDataFound
            nameHead="No Blog Found"
            location="/Admin/CreatePost"
            btnTitle="Create New Blog"
          />
        ) : (
          <BlogsTable blogs={blogs.data} />
        )}
      </div>
    </>
  );
};

export default AllBlogs;
