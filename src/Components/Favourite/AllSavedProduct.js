"use client";
import { ProductLoading } from "@/app/MyAccount/Favourite/page";
import { fetchSavedProduct } from "@/Store/Actions/favouriteAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Product/ProductCard";

export default function AllSavedProducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchSavedProduct({
        queryObj: { userId: localStorage.getItem("id") },
        page: 1,
        limit: 1000,
      })
    );
  }, []);

  // favourite
  const favourite = useSelector((state) => state.favourite);
  return (
    <>
      {favourite?.data.length === 0 && favourite?.isLoading && (
        <ProductLoading />
      )}
      {favourite?.data?.products?.length === 0 && (
        <div className="w-full h-90 grid place-items-center bg-white mt-5">
          No Favourite Found
        </div>
      )}

      <section className=" grid grid-cols-2  md:grid-cols-4 gap-5  ">
        {favourite?.data?.products?.map((product, index) => {
          const { productID } = product ? product : {};
          return (
            <ProductCard
              key={index}
              id={productID?._id}
              fullTitle={productID?.title}
              title={productID?.title?.substring(0, 40) + "..."}
              thumbnail={productID?.thumbnail}
              price={productID?.pricing?.price}
              comAtPrice={productID?.pricing?.comAtPrice}
            />
          );
        })}
      </section>
    </>
  );
}
