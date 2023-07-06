import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers, getUser } from "../../../allLinks";

export const fetchUsersIndividual = createAsyncThunk(
  "blogs/fetchUsersIndividual",
  async () => {
    const id = localStorage.getItem("id");
    const res = await fetch(getUser + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  }
);
