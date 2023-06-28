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
  totalStars: 0,
  starCounts: {},
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
        state.totalStars = action.payload.totalStars;
        state.starCounts = action.payload.starCounts;
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
          state.data.unshift(action.payload.data);
          state.count = state.count + 1;
          state.totalStars = state.totalStars + action.payload.data.stars;
        }
      })
      .addCase(AddProductReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
