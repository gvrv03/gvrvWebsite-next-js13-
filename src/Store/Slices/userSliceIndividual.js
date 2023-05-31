import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersIndividual } from "../Actions/userActionIndividual";

// Define the initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

// Create the user slice
const userSliceIndividual = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersIndividual.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsersIndividual.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsersIndividual.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default userSliceIndividual.reducer;
