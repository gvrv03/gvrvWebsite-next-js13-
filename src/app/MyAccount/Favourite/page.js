import { ProductSkeleton } from "@/app/Products/loading";
import AllSavedProducts from "@/Components/Favourite/AllSavedProduct";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div className="container m-auto">
      <div className="flex gap-5 ">
        <button className="border rounded-full px-5 py-1">All</button>
        <button className="border rounded-full px-5 py-1">Product</button>
        <button className="border rounded-full px-5 py-1">Blog</button>
      </div>

      <div className="mt-5">
        <Suspense fallback={<ProductLoading />}>
          <AllSavedProducts />
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
