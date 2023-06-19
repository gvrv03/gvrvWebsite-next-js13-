import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBlogsURL, getSingleURL } from "../../../allLinks";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const res = await fetch(getAllBlogsURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
});

export const AddBlog = createAsyncThunk(
  "blogs/AddBlog",
  async (data, adminToken) => {
    const res = await fetch(getAllBlogsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + adminToken,
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  }
);

export const DeleteBlog = createAsyncThunk("blogs/DeleteBlog", async (id) => {
  const res = await fetch(getSingleURL + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + id,
    },
  });
  return await res.json();
});
