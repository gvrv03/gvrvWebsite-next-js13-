"use client";
import { FullScreenLoader } from "@/Components/Spinner/LoadingSpinner";
import BlogsTable from "@/Components/Table/BlogsTable";
import { AdminPageHeader, NoDataFound } from "@/Components/UtilComponent";
import { fetchBlogsByQueryObj } from "@/Store/Actions/blogAction";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import XLSX, { utils, write } from "xlsx";

const AllBlogs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchBlogsByQueryObj({
        queryObj: {},
        skip: 0,
        limit: 0,
        sortObj: {},
      })
    );
  }, [dispatch]);

  const blogs = useSelector((state) => state.blogs);
  const { isLoading, error } = blogs;

  // download Data
  function convertJsonToXls(jsonData) {
    const worksheet = utils.json_to_sheet(jsonData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const xlsData = write(workbook, { bookType: "xlsx", type: "array" });
    return new Blob([xlsData], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  }

  function downloadXlsFile(jsonData) {
    const xlsBlob = convertJsonToXls(jsonData);
    const fileName = "Blogs.xlsx";

    if (navigator.msSaveBlob) {
      // For IE and Edge
      navigator.msSaveBlob(xlsBlob, fileName);
    } else {
      // For other browsers
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(xlsBlob);
      downloadLink.download = fileName;
      downloadLink.click();
      URL.revokeObjectURL(xlsBlob);
    }
  }
  return (
    <>
      <div className=" w-full  ">
        <AdminPageHeader
          pageName="All Blogs"
          totalCount={blogs.data.length}
          refreshFun={() => {
            dispatch(
              fetchBlogsByQueryObj({
                queryObj: {},
                skip: 0,
                limit: 0,
                sortObj: {},
              })
            );
          }}
          downloadData={() => downloadXlsFile(blogs.data)}
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
