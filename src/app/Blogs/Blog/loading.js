"use client";
import { Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={90} />
      <Skeleton variant="rectangular" width="100%" height={30} />
      <Skeleton variant="rectangular" width="100%" height={500} />
      <Skeleton variant="rectangular" width="100%" height={10} />
      <Skeleton variant="rectangular" width="100%" height={30} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={500} />
    </div>
  );
};

export default Loading;
