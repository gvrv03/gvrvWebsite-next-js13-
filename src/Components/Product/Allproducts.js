import React from "react";
import { getProductsURL } from "../../../allLinks";
import Pegination from "../UtilityComponents/Pegination";
import ProductCard from "./ProductCard";
import ProductHeader from "./ProductHeader";

export default async function Allproducts({ page, setpage }) {
  const res = await fetch(getProductsURL + `?page=${page}&limit=8`);
  const { products, totalPages } = await res.json();
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
          No Product Found
        </div>
      )}

      <ProductHeader />
      <section className="mt-[141px] grid grid-cols-2  md:grid-cols-4 gap-5  ">
        {products?.map((product, index) => {
          return (
            <ProductCard
              key={index}
              id={product._id}
              fullTitle={product.title}
              title={product.title.substring(0, 40) + "..."}
              thumbnail={product.thumbnail}
              price={product.pricing.price}
              comAtPrice={product.pricing.comAtPrice}
            />
          );
        })}
      </section>
      <Pegination page={page} totalPages={totalPages} setpage={setpage} />
    </>
  );
}
