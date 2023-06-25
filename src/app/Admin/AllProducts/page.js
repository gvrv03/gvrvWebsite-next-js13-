"use client";
import { FullScreenLoader } from "@/Components/Spinner/LoadingSpinner";
import ProductsTable from "@/Components/Table/ProductsTable";
import { AdminPageHeader, NoDataFound } from "@/Components/UtilComponent";
import {
  fetchProducts,
  fetchProductsByQueryObj,
} from "@/Store/Actions/productAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import XLSX, { utils, write } from "xlsx";

const AllProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchProductsByQueryObj({ queryObj: {}, skip: 0, limit: 0, sortObj: {} })
    );
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  const { isLoading, error, data, count } = products;

  // download Data
  function convertJsonToXls(jsonData) {
    const worksheet = utils.json_to_sheet(jsonData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const xlsData = write(workbook, { bookType: "xlsx", type: "array" });
    return new Blob([xlsData], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  }

  function downloadXlsFile(jsonData) {
    const xlsBlob = convertJsonToXls(jsonData);
    const fileName = "Product.xlsx";

    if (navigator.msSaveBlob) {
      // For IE and Edge
      navigator.msSaveBlob(xlsBlob, fileName);
    } else {
      // For other browsers
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(xlsBlob);
      downloadLink.download = fileName;
      downloadLink.click();
      URL.revokeObjectURL(xlsBlob);
    }
  }
  return (
    <div className="">
      <AdminPageHeader
        pageName="All Products"
        totalCount={count}
        refreshFun={() => {
          dispatch(
            fetchProductsByQueryObj({
              queryObj: {},
              skip: 0,
              limit: 0,
              sortObj: {},
            })
          );
        }}
        downloadData={() => downloadXlsFile(data)}
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
        // <></>
        <ProductsTable products={data} count={count} />
      )}
    </div>
  );
};

export default AllProducts;
