import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrderURL } from "../../../allLinks";


export const fetchOrders = createAsyncThunk("orders/fetchOrders", async (data) => {
  
  const page = data?.page ?? 1;
  const limit = data?.limit ?? 10;
  const queryObj = data?.queryObj ?? {};

  const res = await fetch(
    getOrderURL +
      `?page=${page}&limit=${limit}&query=${JSON.stringify(queryObj)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await res.json();
});
