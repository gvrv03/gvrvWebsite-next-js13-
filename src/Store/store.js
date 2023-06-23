import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import productReducer from "./Slices/productsSlice";
import blogReducer from "./Slices/blogSlice";
import userIndividualReducer from "./Slices/userSliceIndividual";
const store = configureStore({
  reducer: {
    users: userReducer,
    blogs: blogReducer,
    user: userIndividualReducer,
    products: productReducer,
  },
});

export default store;
