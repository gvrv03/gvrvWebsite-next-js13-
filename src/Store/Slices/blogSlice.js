import { createSlice } from "@reduxjs/toolkit";
import { AddBlog, DeleteBlog, fetchBlogs } from "../Actions/blogAction";

// Define the initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
  count: 0,
  totatlPages: 0,
};

// Create the user slice
const blogSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload.blogs;
        state.count = action.payload.blogCount;
        state.totatlPages = action.payload.totalPages;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(AddBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        const blogData = action.payload;
        if (blogData.isSuccess === true) {
          state.data.push(action.payload.data);
        }
      })
      .addCase(AddBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(DeleteBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        const blogData = action.payload;
        if (blogData.isSuccess === true) {
          state.data = state.data.filter(
            (ele) => ele._id !== blogData.data._id
          );
          state.count = state.count - 1;
        }
      })
      .addCase(DeleteBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default blogSlice.reducer;
