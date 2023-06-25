"use client";
import Allproducts from "@/Components/Product/Allproducts";
import Link from "next/link";
import React from "react";
import LoadingProduct from "./loading";

const Products = () => {
  return (
    <div className=" h-full">
      <Allproducts />
    </div>
  );
};

export default Products;
