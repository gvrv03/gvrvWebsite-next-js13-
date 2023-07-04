import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import productReducer from "./Slices/productsSlice";
import blogReducer from "./Slices/blogSlice";
import userIndividualReducer from "./Slices/userSliceIndividual";
import productReviewReducer from "./Slices/productReviewSlice";
import favouriteReducer from "./Slices/favouriteSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    blogs: blogReducer,
    user: userIndividualReducer,
    products: productReducer,
    productReview: productReviewReducer,
    favourite: favouriteReducer,
  },
});

export default store;
