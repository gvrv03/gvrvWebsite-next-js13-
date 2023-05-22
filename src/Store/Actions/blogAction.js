import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBlogsURL } from "../../../allLinks";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const res = await fetch(getAllBlogsURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
});

