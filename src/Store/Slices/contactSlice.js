import { createSlice } from "@reduxjs/toolkit";
import {
  AddContact,
  DeleteContact,
  fetchContacts,
} from "../Actions/contactAction";

// Define the initial state
const initialState = {
  data: [],
  isLoading: false,
  error: null,
  count: 0,
  totatlPages: 0,
};

// Create the user slice
const contactSlice = createSlice({
  name: "contact",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload.Contacts;
        state.count = action.payload.contactCount;
        state.totatlPages = action.payload.totalPages;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(AddContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const contactData = action.payload;
        if (contactData.isSuccess === true) {
          state.data.push(action.payload.data);
        }
      })
      .addCase(AddContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(DeleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const contactData = action.payload;
        state.error = null;
        if (contactData.isSuccess === true) {
          state.data = state.data.filter(
            (ele) => ele._id !== contactData.data._id
          );
          state.count = state.count - 1;
        }
      })
      .addCase(DeleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
