import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProductReviewURL } from "../../../allLinks";

export const fetchProductReviews = createAsyncThunk(
  "ProductReview/fetchProductReviews",
  async (productID) => {
    const res = await fetch(addProductReviewURL + productID, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  }
);

// export const fetchProductsByQueryObj = createAsyncThunk(
//   "Product/fetchProductsByQueryObj",
//   async (data) => {
//     const res = await fetch(getProductsByQueryOBJURL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         queryObject: data.queryObj,
//         skip: data.skip,
//         limit: data.limit,
//         sortingObj: data.sortObj,
//       }),
//     });
//     return await res.json();
//   }
// );

export const AddProductReview = createAsyncThunk(
  "ProductReview/AddProductReview",
  async (data) => {
    console.log(data);
    const res = await fetch(addProductReviewURL + data.productID, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  }
);
