"use client";
import LoadingSpinner, {
  FullScreenLoader,
} from "@/Components/Spinner/LoadingSpinner";
import BlogsTable from "@/Components/Table/BlogsTable";
import { useUserAuth } from "@/Context/UserAuthContext";
import { DeleteBlog, fetchBlogs } from "@/Store/Actions/blogAction";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

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
        <div className=" font-semibold    rounded-sm   flex justify-between ">
          <div>All Blogs ({blogs.data.length})</div>
          <div className="flex gap-5 justify-between items-center">
            <button
              onClick={() => {
                dispatch(fetchBlogs());
              }}
            >
              <i className="bi bi-arrow-clockwise text-lg" />{" "}
            </button>
            <button
              onClick={() => {
                router.push("/Admin/CreatePost");
              }}
              type="button"
              className="text-xs pBtn px-5 font-semibold rounded-sm py-2"
            >
              Create Post
            </button>
          </div>
        </div>
        {error && <div className="  p-5 mt-5">Unexpected error occured !</div>}
        {isLoading && <FullScreenLoader />}
        {!isLoading && blogs.data.length === 0 ? (
          <div className=" text-center  bg-white p-5 mt-10 grid  place-items-center">
            <div className="bg-white w-full md:w-fit flex flex-col justify-center items-center p-5 ">
              <img src="/NoData.svg" className="w-80" alt="" srcset="" />
              <h1 className="text-gray-400 mt-5">No Blog Found</h1>
              <button
                onClick={() => {
                  router.push("/Admin/CreatePost");
                }}
                className="pBtn px-5 py-2 mt-5"
              >
                Create New Blog
              </button>
            </div>
          </div>
        ) : (
          <BlogsTable blogs={blogs.data} />
        )}
      </div>
    </>
  );
};

export default AllBlogs;
