import initDB from "@/helper/initDB";
import SavedProduct from "@/Modal/SavedProduct";
import ProductDetail from "@/Modal/ProductDetail";
initDB();

import { NextResponse } from "next/server";

// --------------To Saved Product--------------
export const POST = async (request) => {
  try {
    const Data = await request.json();
    // productID, userId;
    const { productID, userId } = Data;

    const checkExist = await SavedProduct.findOne({ productID, userId });

    if (checkExist) {
      await SavedProduct.findOneAndRemove({
        productID,
        userId,
      });

      return NextResponse.json(
        {
          message: "Product is removed from Favourites !",
          isSuccess: true,
        },
        {
          status: 200,
        }
      );
    }
    // to Add In Database
    const productSaved = await SavedProduct.create({ ...Data });

    return NextResponse.json(
      {
        product: productSaved,
        message: "Added to Favourite !",
        isSuccess: true,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        error: error.message,
        errorMsg: "Internal Server Error",
        isSuccess: false,
      },
      {
        status: 500,
      }
    );
  }
};

// --------------To Fetch All Saved Prodct--------------
export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const page = searchParams.get("page"); // Retrieves the value of the 'page' parameter
    const limit = searchParams.get("limit"); // Retrieves the value of the 'limit' parameter
    const query = searchParams.get("query"); // Retrieves the value of the 'query' parameter  Ex : ?query={"_id":"649ec1dc0227a5b8da286425"}
    const skipCount = (page - 1) * limit;
    const productCount = await SavedProduct.countDocuments(); // Get the total count of blogs
    const totalPages = Math.ceil(productCount / limit); // Calculate the total number of pages
    await ProductDetail.countDocuments();
    const products = await SavedProduct.find(JSON.parse(query))
      .populate("productID")
      .sort({ createdAt: -1 })
      .skip(skipCount)
      .limit(limit);
    return NextResponse.json({
      isSuccess: true,
      products,
      totalPages,
      productCount,
    });
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        error: error.message,
        errorMsg: "Internal Server Error",
        isSuccess: false,
      },
      {
        status: 500,
      }
    );
  }
};
