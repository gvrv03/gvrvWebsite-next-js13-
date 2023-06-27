import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AddProduct,
  fetchProducts,
  fetchProductsByQueryObj,
} from "../Actions/productAction";

// Define the initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
  count: 0,
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
      .addCase(fetchProductsByQueryObj.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsByQueryObj.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.products;
        state.count = action.payload.productsCount;
      })
      .addCase(fetchProductsByQueryObj.rejected, (state, action) => {
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
