"use client";
import LoadingSpinner from "@/Components/Spinner/LoadingSpinner";
import { fetchBlogs } from "@/Store/Actions/blogAction";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllBlogs = () => {
  const dispatch = useDispatch();
  const [forDelete, setforDelete] = useState({ state: false, id: "" });
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const blogs = useSelector((state) => state.blogs);
  const { isLoading, error } = blogs;

  return (
    <>
      <div className="h-full  ">
        <div className=" font-semibold    rounded-sm  border-b-2 p-2 bg-white flex justify-between ">
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
              type="button"
              className="text-xs pBtn px-5 font-semibold rounded-sm py-2"
            >
              Create Post
            </button>
          </div>
        </div>
        {error && <div className="  p-5 mt-5">Unexpected error occured !</div>}
        {isLoading && (
          <div className=" p-2 mt-5 grid place-items-center">
            <LoadingSpinner />
          </div>
        )}
        <div className="mt-5 flex gap-5 flex-col h-screen  overflow-y-scroll">
          {blogs.data &&
            blogs.data.map((item, index) => {
              return (
                <div key={index} className="bg-white  h-fit  p-5">
                  {" "}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-5  ">
                    <div className="flex gap-5  items-center flex-col justify-center md:flex-row ">
                      <div>
                        <img
                          src={item.image}
                          className="md:h-20 md:w-20 md:rounded-full border"
                          alt=""
                          srcSet=""
                        />
                      </div>
                      <div className="md:text-start text-center">
                        <h2 className="font-semibold text-lg">{item.title}</h2>
                        <h2>{item.category}</h2>
                      </div>{" "}
                    </div>

                    <div className="flex flex-col  gap-5 justify-center items-center">
                      <div className="flex gap-2 text-xs md:text-sm justify-end">
                        <button className=" p-1 w-8 h-8 bg-sky-50  rounded-sm">
                          <i className=" bi bi-eye-fill" />
                        </button>
                        <button className=" p-1 w-8 h-8 bg-sky-50  rounded-sm">
                          <i className=" bi text-blue-700 bi-pen-fill" />
                        </button>
                        <button
                          onClick={() => {
                            setforDelete({ state: true, id: item._id });
                          }}
                          className=" p-1 w-8 h-8 bg-sky-50  rounded-sm"
                        >
                          <i className=" bi text-red-500 bi-trash-fill" />
                        </button>
                        <button className=" p-1 w-8 h-8 bg-sky-50  rounded-sm">
                          <i className=" bi bi-share-fill" />
                        </button>
                      </div>
                      <div className="flex text-xs md:text-sm gap-5">
                        <h5>{item.author}</h5>
                        <i className="bi bi-person-fill" />
                      </div>
                    </div>
                  </div>
                  {forDelete.state && forDelete.id === item._id && (
                    <div className="border p-2 flex justify-between flex-col sm:flex-row gap-5  items-center rounded-sm mt-5">
                      <p className="font-semibold">Sure to delete !</p>
                      <div className="flex gap-5 ">
                        <button
                          onClick={() => {
                            setforDelete({ state: false, id: "" });
                          }}
                          className="bg-white px-5 py-1  border rounded-sm"
                        >
                          Cancel
                        </button>
                        <button className="pBtn px-5 py-1 rounded-sm">
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
