"use client";
import { FullScreenLoader } from "@/Components/Spinner/LoadingSpinner";
import ProductsTable from "@/Components/Table/ProductsTable";
import { AdminPageHeader, NoDataFound } from "@/Components/UtilComponent";
import { fetchProducts } from "@/Store/Actions/productAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  const { isLoading, error, data } = products;
  return (
    <div className="w-full">
      <AdminPageHeader
        pageName="All Products"
        totalCount="500"
        refreshFun={() => {
          dispatch(fetchProducts());
        }}
        routeLocation="/Admin/CreateProduct"
        btnName="Create Product"
      />
      {error && <div className="  p-5 mt-5">Unexpected error occured !</div>}
      {isLoading && <FullScreenLoader />}
      {!isLoading && data.length === 0 ? (
        <NoDataFound
          nameHead="No Blog Found"
          location="/Admin/CreateProdct"
          btnTitle="Add New Product"
        />
      ) : (
        <ProductsTable products={data} />
      )}
    </div>
  );
};

export default AllProducts;
