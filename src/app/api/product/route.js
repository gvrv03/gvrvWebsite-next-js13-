import initDB from "@/helper/initDB";
import ProductDetailData from "@/Modal/ProductDetail";
import ProductActual from "@/Modal/Product";
initDB();

import { NextResponse } from "next/server";

// --------------To Add Blog--------------
export const POST = async (request) => {
  try {
    const Data = await request.json();
    const { productDetail, product } = Data;
    const { title } = productDetail;

    // --------------To check product existence----------------
    const titleExist = await ProductDetailData.findOne({ title });
    if (titleExist) {
      await ProductDetailData.findOneAndUpdate({ title }, { ...productDetail });

      return NextResponse.json(
        {
          data: null,
          message: "Already Exits, Then Updated",
          isSuccess: true,
        },
        {
          status: 200,
        }
      );
    }

    // --------------To Add produuct Detail----------------
    const addProductDetail = await ProductDetailData.create({
      ...productDetail,
    });

    // --------------To Add actudal produuct----------------
    const { Name, Product, date } = product;
    const productOBJ = {
      Name: Name,
      Product: Product,
      ProductDetail: addProductDetail._id,
      date: date,
    };
    const addProduct = await ProductActual.create({ ...productOBJ });

    // --------------To Update productID in productDetail ----------------
    const UpdateProductID = await ProductDetailData.findByIdAndUpdate(
      addProductDetail._id,
      { productID: addProduct._id }
    );

    return NextResponse.json(
      {
        data: Data,
        Product: addProduct,
        ProductDetail: UpdateProductID,
        message: "Product Added Successfully",
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
        error: error,
        errorMsg: "Internal Server Error",
        isSuccess: false,
      },
      {
        status: 500,
      }
    );
  }
};

// --------------To Fetch All Blogs--------------
export const GET = async (req, res) => {
  try {
    const products = await ProductDetailData.find();
    return NextResponse.json(products);
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
