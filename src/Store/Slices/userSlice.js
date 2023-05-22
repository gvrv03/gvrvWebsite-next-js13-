import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// Create an async thunk to fetch user data
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const res = await fetch("https://dsyconsultancy.netlify.app/api/signUp/");
  const response = await res.json(); 
  return response;
});

// Create the user slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
