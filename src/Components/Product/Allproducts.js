import React from "react";
import { getProductsURL } from "../../../allLinks";
import ProductCard from "./ProductCard";

const Allproducts = async () => {
  const res = await fetch(getProductsURL);
  const data = await res.json();
  if (data === undefined) {
    return (
      <div className="h-screen w-full grid place-items-center  bg-white ">
        Error occuured
      </div>
    );
  }
  return (
    <>
      {data.length === 0 && (
        <div className="w-full h-90 grid place-items-center bg-white mt-5">
          No Product Found
        </div>
      )}
      <section className="mt-5 grid grid-cols-1  h-90 md:grid-cols-4 gap-5 justify-between overflow-y-scroll flex-wrap ">
        {data.map((product, index) => {
          const {
            title,
            thumbnail,
            pricing,
            productOrganization,
            addeBy,
            _id,
          } = product;
          const { price, comAtPrice } = pricing;

          const { category, type, vendor, collection, keywords } =
            productOrganization;
          return (
            <ProductCard
              key={index}
              title={title}
              thumbnail={thumbnail}
              price={price}
              comAtPrice={comAtPrice}
            />
          );
        })}
      </section>
    </>
  );
};

export default Allproducts;
