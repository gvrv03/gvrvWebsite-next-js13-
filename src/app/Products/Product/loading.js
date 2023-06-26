"use client";
import { Divider, Skeleton } from "@mui/material";
import React from "react";

const LoadingSProduct = () => {
  return (
    <div className="mt-[88px] flex flex-col gap-5 ">
      <div className="flex flex-col md:flex-row  gap-5">
        <Skeleton
          variant="rectangular"
          width="100%"
          className="h-[300px] md:h-[500px]"
        />
        <div className="w-full flex flex-col gap-2">
          <Skeleton variant="rectangular" width="20%" height={20} />
          <Skeleton variant="rectangular" width="100%" height={40} />
          <Skeleton variant="rectangular" width="60%" height={40} />
          <Divider />
          <Skeleton variant="rectangular" width="100%" height={300} />
          <Divider />
          <div className="flex justify-between">
            <Skeleton variant="rectangular" width="20%" height={40} />
            <div className="flex gap-5 w-full justify-end">
              <Skeleton variant="rectangular" width="20%" height={40} />
              <Skeleton variant="rectangular" width="10%" height={40} />
            </div>{" "}
          </div>
        </div>{" "}
      </div>
      <Skeleton variant="rectangular" width="100%%" height={50} />
      <Skeleton variant="rectangular" width="100%%" height={500} />
    </div>
  );
};

export default LoadingSProduct;
