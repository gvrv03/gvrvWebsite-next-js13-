import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers } from "../../../allLinks";

export const fetchUsers = createAsyncThunk("Users/fetchUsers", async () => {
  const res = await fetch(getAllUsers, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
});
