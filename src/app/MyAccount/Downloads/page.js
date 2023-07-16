"use client";
import AllDownloads from "@/Components/Downloads/AllDownloads";
import { NoDataFound } from "@/Components/UtilComponent";
import { fetchOrders } from "@/Store/Actions/orderAction";
import { Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DownloadProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchOrders({
        queryObj: { User: localStorage.getItem("id"), status: "paid" },
        page: 1,
        limit: 1000,
      })
    );
  }, [dispatch]);

  // favourite
  const { data, error, isLoading, totatlPages } = useSelector(
    (state) => state.order
  );

  return (
    <div>
      My Downloads
      {error && (
        <div className="  p-5 mt-5">
          Unexpected error occured !{" "}
          <span className="p-1 text-center bg-red-200          -red-300">
            {error}
          </span>{" "}
        </div>
      )}
      {data?.length === 0 && isLoading && <DownloadProductLoading />}
      {!isLoading && data?.length === 0 ? (
        <NoDataFound
          nameHead="No Downloads Found"
          location="/Products"
          btnTitle="Buy Product"
        />
      ) : (
        <AllDownloads data={data} />
      )}
    </div>
  );
};

export default DownloadProduct;

const DownloadProductLoading = () => {
  return (
    <div className=" grid grid-cols-2 mt-5 md:grid-cols-6 gap-5 ">
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </div>
  );
};

function ProductSkeleton() {
  return (
    <div className="w-full md:w-auto      p-2 bg-white ">
      <div className=" rounded-sm">
        <div className="md:block hidden">
          <Skeleton variant="rectangular" width="100%" height={200} />
        </div>
        <div className="block md:hidden">
          <Skeleton variant="rectangular" width="100%" height={160} />
        </div>

        <div className="flex gap-2 items-center justify-between  flex-wrap mt-2 ">
          <Skeleton variant="rectangular" width="100%" height={20} />
          <Skeleton variant="rectangular" width="100%" height={40} />
        </div>
      </div>
    </div>
  );
}
