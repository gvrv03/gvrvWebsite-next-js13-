import NotFound from "@/app/not-found";
import ProductMinDetail from "@/Components/Product/ProductMinDetail";
import SingleHeader from "@/Components/SingleHeader";
import React from "react";
import { getSingleProductURL } from "../../../../../allLinks";

const ProductDetail = async ({ searchParams }) => {
  const res = await fetch(getSingleProductURL + searchParams.product);
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
    <div className="h-full  mt-[141px]  ">
      <SingleHeader firstTitle={{name:"Product", location:"/Products"}}  title2Nd={title} />
      <ProductMinDetail
        comAtPrice={comAtPrice}
        images={images}
        artical={artical}
        id={_id}
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
