import { ProductSkeleton } from "@/app/Products/loading";
import AllSavedProducts from "@/Components/Favourite/AllSavedProduct";
import React, { Suspense } from "react";
import { savedProductToFavoriteURL } from "../../../../allLinks";

const Page = async () => {
  const res = await fetch(
    `${savedProductToFavoriteURL}?page=1&limit=100&query={"userId":"64a7a6148f71ff29c9bdeb4e"}`
  );
  const { products } = await res.json();

  return (
    <div className="container m-auto">
      <div className="flex gap-5 ">
        <button className="border rounded-full px-5 py-1">All</button>
        <button className="border rounded-full px-5 py-1">Product</button>
        <button className="border rounded-full px-5 py-1">Blog</button>
      </div>

      <div className="mt-5">
        <Suspense fallback={<ProductLoading />}>
          <AllSavedProducts products={products && products} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;

const ProductLoading = () => {
  return (
    <div className=" grid grid-cols-2  md:grid-cols-4 gap-5 ">
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </div>
  );
};
