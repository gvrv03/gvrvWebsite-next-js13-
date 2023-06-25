import React from "react";
import { getProductsURL } from "../../../allLinks";
import ProductCard from "./ProductCard";
import ProductHeader from "./ProductHeader";

export default async function Allproducts() {
  const res = await fetch(getProductsURL);
  const data = await res.json();
  if (data && data === undefined) {
    return (
      <div className="h-screen w-full grid place-items-center  bg-white ">
        Error occuured
      </div>
    );
  }

  return (
    <>
      {data && data.length === 0 && (
        <div className="w-full h-90 grid place-items-center bg-white mt-5">
          No Product Found
        </div>
      )}

      <ProductHeader />
      <section className="mt-12 grid grid-cols-2  md:grid-cols-4 gap-5  ">
        {data &&
          data.map((product, index) => {
            // const {
            //   title,
            //   thumbnail,
            //   pricing,
            //   // productOrganization,
            //   // addeBy,
            //   _id,
            // } = product ? product : {};
            // const { price, comAtPrice } = product.pricing ? pricing : {};

            // // const { category, type, vendor, collection, keywords } =
            // //   productOrganization;

            return (
              <ProductCard
                key={index}
                id={product._id}
                title={product.title}
                thumbnail={product.thumbnail}
                price={product.pricing.price}
                comAtPrice={product.pricing.comAtPrice}
              />
            );
          })}
      </section>
    </>
  );
}
