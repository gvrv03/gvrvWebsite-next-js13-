import NotFound from "@/app/not-found";
import ProductMinDetail from "@/Components/Product/ProductMinDetail";
import Link from "next/link";
import React from "react";
import { getSingleProductURL } from "../../../../../allLinks";

const ProductDetail = async ({ params }) => {
  const res = await fetch(getSingleProductURL + params.pid);
  const data = await res.json();
  const {
    title,
    artical,
    views,
    thumbnail,
    images,
    pricing,
    productOrganization,
    description,
    addeBy,
    _id,
    productID,
  } = data ? data : {};

  const { price, comAtPrice } = pricing ? pricing : {};
  if (artical === undefined) {
    return (
      <div className=" h-full ">
        <NotFound />
      </div>
    );
  }

  return (
    <div className="h-full  mt-20  ">
      <ProductMinDetail
        comAtPrice={comAtPrice}
        images={images}
        artical={artical}
        productID={productID}
        price={price}
        title={title}
        description={description}
        thumbnail={thumbnail}
      />
    </div>
  );
};

export default ProductDetail;
