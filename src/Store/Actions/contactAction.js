import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactURL } from "../../../allLinks";

export const fetchContacts = createAsyncThunk(
  "contact/fetchContacts",
  async (data) => {
    const page = data?.page ?? 1;
    const limit = data?.limit ?? 10;
    const queryObj = data?.queryObj ?? {};

    const res = await fetch(
      ContactURL +
        `?page=${page}&limit=${limit}&query=${JSON.stringify(queryObj)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await res.json();
  }
);

export const AddContact = createAsyncThunk(
  "Contact/AddContact",
  async (data) => {
    const res = await fetch(ContactURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  }
);

export const DeleteContact = createAsyncThunk(
  "contact/DeleteContact",
  async (data) => {
    const res = await fetch(ContactURL + "?ID=" + data?.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.token,
      },
    });
    return await res.json();
  }
);
