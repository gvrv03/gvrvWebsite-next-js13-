import axios from "axios";
import React from "react";
import { savedProductToFavoriteURL } from "../../../allLinks";

import ProductCard from "../Product/ProductCard";

export default async function AllSavedProducts() {
  const res = await fetch(
    `${savedProductToFavoriteURL}?page=1&limit=100&query={"userId":"64a7a6148f71ff29c9bdeb4e"}`
  );

  const { products } = await res.json();
  if (products && products === undefined) {
    return (
      <div className="h-screen w-full grid place-items-center  bg-white ">
        Error occuured
      </div>
    );
  }

  return (
    <>
      {products?.length === 0 && (
        <div className="w-full h-90 grid place-items-center bg-white mt-5">
          No Favourite Found
        </div>
      )}

      <section className=" grid grid-cols-2  md:grid-cols-4 gap-5  ">
        {products?.map((product, index) => {
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
