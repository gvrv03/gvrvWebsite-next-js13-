import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AddProduct, fetchProducts } from "../Actions/productAction";

// Define the initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// Create the user slice
const blogSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(AddProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        const blogData = action.payload;
        if (blogData.isSuccess === true) {
          state.data.push(action.payload.data);
        }
      })
      .addCase(AddProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
