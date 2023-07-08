import { createAsyncThunk } from "@reduxjs/toolkit";
import { savedProductToFavoriteURL } from "../../../allLinks";

export const SavedProduct = createAsyncThunk(
  "Favourite/SavedProduct",
  async (productID) => {
    const res = await fetch(savedProductToFavoriteURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productID: productID,
        userId: localStorage.getItem("id"),
      }),
    });
    return await res.json();
  }
);

export const fetchSavedProduct = createAsyncThunk(
  "SavedProduct/fetchSavedProduct",
  async (data) => {
    const page = data?.page ?? 1;
    const limit = data?.limit ?? 1000;
    const queryObj = data?.queryObj ?? {};
    const res = await fetch(
      savedProductToFavoriteURL +
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
