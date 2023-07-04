"use client";
import Allproducts from "@/Components/Product/Allproducts";
import React from "react";
import { useState } from "react";

const Products = () => {
  const [page, setpage] = useState(1);

  return (
    <div className=" h-full">
      <Allproducts setpage={setpage} page={page} />
    </div>
  );
};

export default Products;
