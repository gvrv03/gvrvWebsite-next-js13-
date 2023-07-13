"use client";
import { FullScreenLoader } from "@/Components/Spinner/LoadingSpinner";
import BlogsTable from "@/Components/Table/BlogsTable";
import { AdminPageHeader, NoDataFound } from "@/Components/UtilComponent";
import { fetchBlogs } from "@/Store/Actions/blogAction";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import XLSX, { utils, write } from "xlsx";

const AllBlogs = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(
      fetchBlogs({
        queryObj: {},
        page: 1,
        limit: 10,
      })
    );
  }, [dispatch]);

  const blogs = useSelector((state) => state.blogs);
  console.log(blogs);
  const { isLoading, error, count, totatlPages, data } = blogs;
  console.log(error);
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
          totalCount={count}
          refreshFun={() => {
            dispatch(
              fetchBlogs({
                queryObj: {},
                page: 1,
                limit: 10,
              })
            );
          }}
          downloadData={() => downloadXlsFile(data)}
          routeLocation="/Admin/CreatePost"
          btnName="Create Post"
        />

        {error &&  <div className="  p-5 mt-5">Unexpected error occured !    <span  className="p-1 text-center bg-red-200          -red-300"  >{error}</span>  </div>}
        {isLoading && <FullScreenLoader />}
        {!isLoading && data.length === 0 ? (
          <NoDataFound
            nameHead="No Blog Found"
            location="/Admin/CreatePost"
            btnTitle="Create New Blog"
          />
        ) : (
          <BlogsTable blogs={data} totatlPages={totatlPages} count={count} />
        )}
      </div>
    </>
  );
};

export default AllBlogs;
