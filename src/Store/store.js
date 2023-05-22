import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import blogReducer from "./Slices/blogSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    blogs: blogReducer,
  },
});

export default store;
