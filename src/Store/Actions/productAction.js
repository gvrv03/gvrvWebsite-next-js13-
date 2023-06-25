import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsByQueryOBJURL, getProductsURL } from "../../../allLinks";

export const fetchProducts = createAsyncThunk(
  "Product/fetchProducts",
  async () => {
    const res = await fetch(getProductsURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  }
);

export const fetchProductsByQueryObj = createAsyncThunk(
  "Product/fetchProductsByQueryObj",
  async (data) => {
    const res = await fetch(getProductsByQueryOBJURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        queryObject: data.queryObj,
        skip: data.skip,
        limit: data.limit,
        sortingObj: data.sortObj,
      }),
    });
    return await res.json();
  }
);

export const AddProduct = createAsyncThunk(
  "Product/AddProduct",
  async (data) => {
    console.log(data);
    const res = await fetch(getProductsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  }
);
