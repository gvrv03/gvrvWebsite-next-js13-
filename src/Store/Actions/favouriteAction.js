import { createAsyncThunk } from "@reduxjs/toolkit";
import { savedProductToFavoriteURL } from "../../../allLinks";

export const SavedProduct = createAsyncThunk(
  "Favourite/SavedProduct",
  async (data) => {
    const res = await fetch(savedProductToFavoriteURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  }
);
