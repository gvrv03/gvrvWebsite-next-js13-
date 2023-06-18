import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AddBlog, DeleteBlog, fetchBlogs } from "../Actions/blogAction";

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
      })
      .addCase(DeleteBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        const { _id } = action.payload.data;
        if (_id) {
          state.data = state.data.filter((ele) => ele._id !== _id);
        }
      })
      .addCase(DeleteBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

export default blogSlice.reducer;
