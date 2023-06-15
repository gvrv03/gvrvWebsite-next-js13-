import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AddBlog, fetchBlogs } from "../Actions/blogAction";

// Define the initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
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
        state.data = action.payload;
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
        state.data.push(action.payload.data);
      })
      .addCase(AddBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
