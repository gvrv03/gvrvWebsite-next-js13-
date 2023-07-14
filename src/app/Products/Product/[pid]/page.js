import NotFound from "@/app/not-found";
import ProductMinDetail from "@/Components/Product/ProductMinDetail";
import SingleHeader from "@/Components/SingleHeader";
import React from "react";
import { getSingleProductURL } from "../../../../../allLinks";
import baseUrl from "../../../../../baseUrl";

export async function generateMetadata({ searchParams }) {
  // read route params
  const id = searchParams.product;

  // fetch data
  const product = await fetch(getSingleProductURL + searchParams.product).then(
    (res) => res.json()
  );

  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
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
  } = product ? product : {};

  const { keywords, category, type, author } = productOrganization
    ? productOrganization
    : {};
  let metatitle = title?.replaceAll(" ", "_");
  return {
    title: title,
    description: description,
    author: author && author,
    keywords: keywords,
    category: category,
    images: [thumbnail, ...images],
    url: "/Products/Product/" + metatitle + "?product=" + _id,
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      author: author && author,
      keywords: keywords,
      category: category,
      images: [thumbnail, ...images],
      url: "/Products/Product/" + metatitle + "?product=" + _id,
    },
    openGraph: {
      title: title,
      description: description,
      author: author && author,
      keywords: keywords,
      category: category,
      images: [thumbnail, ...images],
      url: "/Products/Product/" + metatitle + "?product=" + _id,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

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
    <main className="h-full  mt-[141px]  ">
      <SingleHeader
        firstTitle={{ name: "Product", location: "/Products" }}
        title2Nd={title}
      />
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
    </main>
  );
};

export default ProductDetail;
