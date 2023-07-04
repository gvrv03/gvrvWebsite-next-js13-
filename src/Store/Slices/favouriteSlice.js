import { createSlice } from "@reduxjs/toolkit";
import { SavedProduct } from "../Actions/favouriteAction";

// Define the initial state
const initialState = {
  data: {
    blogs: [],
    products: [],
  },
  isLoading: false,
  error: null,
  count: 0,
  totatlPages: 0,
};

// Create the favouriteSlice slice
const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(SavedProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(SavedProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        const Data = action.payload;
        if (Data.isSaved === true) {
          state.data.products.push(action.payload.product);
          state.count = state.count + 1;
        }
      })
      .addCase(SavedProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default favouriteSlice.reducer;
