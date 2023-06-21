"use client";
import { AdminPageHeader } from "@/Components/UtilComponent";
import React from "react";

const AllProducts = () => {
  return (
    <div>
      <AdminPageHeader
        pageName="All Products"
        totalCount="500"
        refreshFun={null}
        routeLocation="/Admin/CreateProduct"
        btnName="Create Product"
      />
    </div>
  );
};

export default AllProducts;
