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

export const AddBlog = createAsyncThunk("blogs/AddBlog", async (data) => {
  console.log(data);
  const res = await fetch(getAllBlogsURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
});
