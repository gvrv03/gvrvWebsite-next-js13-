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
