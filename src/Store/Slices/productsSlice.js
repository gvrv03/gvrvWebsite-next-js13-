import { createSlice } from "@reduxjs/toolkit";
import { AddProduct, fetchProducts } from "../Actions/productAction";

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
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload.products;
        state.count = action.payload.ProductCount;
        state.totatlPages = action.payload.totalPages;
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
        const productData = action.payload;
        if (productData.isSuccess === true) {
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
