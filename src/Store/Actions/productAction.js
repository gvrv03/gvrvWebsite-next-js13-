import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsByQueryOBJURL, getProductsURL } from "../../../allLinks";

export const fetchProducts = createAsyncThunk(
  "Product/fetchProducts",
  async (data) => {
    const page = data?.page ?? 1;
    const limit = data?.limit ?? 10;
    const queryObj = data?.queryObj ?? {};
    const res = await fetch(
      getProductsURL +
        `?page=${page}&limit=${limit}&query=${JSON.stringify(queryObj)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
