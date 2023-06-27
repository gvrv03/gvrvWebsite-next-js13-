"use client";
import Allproducts from "@/Components/Product/Allproducts";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import LoadingProduct from "./loading";

const Products = () => {
  const [page, setpage] = useState(1);

  return (
    <div className=" h-full">
      <Allproducts setpage={setpage} page={page} />
    </div>
  );
};

export default Products;
