"use client";
import ProductHeader from "@/Components/Product/ProductHeader";
import { Skeleton } from "@mui/material";
import React from "react";

const LoadingProduct = () => {
  return (
    <>
      <ProductHeader />

      <section className="mt-[148px] grid grid-cols-2  md:grid-cols-4 gap-5 justify-between  flex-wrap ">
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </section>
    </>
  );
};

export default LoadingProduct;

function ProductSkeleton() {
  return (
    <div className="w-full md:w-auto  bg-white ">
      <div className=" rounded-sm">
        <Skeleton variant="rectangular" width="100%" height={200} />

        <div className="flex gap-2 items-center justify-between p-2 flex-wrap mt-2 ">
          <Skeleton variant="rectangular" width="100%" height={50} />
          <Skeleton variant="rectangular" width="100%" height={20} />
        </div>
      </div>
    </div>
  );
}
