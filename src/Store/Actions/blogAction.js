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
  async (data) => {
    const res = await fetch(getAllBlogsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.adminToken,
      },
      body: JSON.stringify(data.blog),
    });
    return await res.json();
  }
);

export const DeleteBlog = createAsyncThunk("blogs/DeleteBlog", async (data) => {
  const res = await fetch(getSingleURL + data.id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + data.token,
    },
  });
  return await res.json();
});
