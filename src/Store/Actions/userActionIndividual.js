import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers, getUser } from "../../../allLinks";

export const fetchUsersIndividual = createAsyncThunk(
  "blogs/fetchUsersIndividual",
  async () => {
    const fid = localStorage.getItem("firebaseuid");
    const res = await fetch(getUser + fid, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  }
);
