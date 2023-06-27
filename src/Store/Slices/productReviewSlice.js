import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AddProductReview,
  fetchProductReviews,
} from "../Actions/productReviewAction";

// Define the initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
  count: 0,
};

// Create the user slice
const blogSlice = createSlice({
  name: "productReview",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.count = action.payload.ReviewCount;
      })
      .addCase(fetchProductReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })

      .addCase(AddProductReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddProductReview.fulfilled, (state, action) => {
        state.isLoading = false;
        const reviewData = action.payload;
        if (reviewData.isSuccess === true) {
          state.data.push(action.payload.data);
        }
      })
      .addCase(AddProductReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
