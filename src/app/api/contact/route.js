import { AdminMiddleware, RootMiddleware } from "@/helper/authMiddleware";
import initDB from "@/helper/initDB";
import ContactUs from "@/Modal/ContactUs";
initDB();

import { NextResponse } from "next/server";

// --------------To Add Contact--------------
export const POST = async (request) => {
  try {
    const Data = await request.json();

    const AddContact = await ContactUs.create(Data);
    return NextResponse.json(
      {
        data: AddContact,
        message: "Thanks for Contacting !",
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
        error: "Internal Server Error",
        errorMsg: error.message,
        isSuccess: false,
      },
      {
        status: 500,
      }
    );
  }
};

// --------------To Fetch All Contact--------------
export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const page = searchParams.get("page"); // Retrieves the value of the 'page' parameter
    const limit = searchParams.get("limit"); // Retrieves the value of the 'limit' parameter
    const query = searchParams.get("query"); // Retrieves the value of the 'query' parameter  Ex : ?query={"_id":"649ec1dc0227a5b8da286425"}

    const skipCount = (page - 1) * limit;
    const contactCount = await ContactUs.countDocuments(); // Get the total count of ContactUs
    const totalPages = Math.ceil(contactCount / limit); // Calculate the total number of pages
    const Contacts = await ContactUs.find(JSON.parse(query))
      .sort({ createdAt: -1 })
      .skip(skipCount)
      .limit(limit);

    return NextResponse.json({
      isSuccess: true,
      Contacts,
      totalPages,
      contactCount,
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

// to Delete Contact
export const DELETE = RootMiddleware(async (request) => {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const ID = searchParams.get("ID"); // Retrieves the value of the 'page' parameter

    const deleteContact = await ContactUs.findByIdAndDelete(ID);
    if (!deleteContact) {
      return NextResponse.json(
        {
          message: "Contact not Exists",
          isSuccess: false,
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      {
        data: deleteContact,
        message: "Contact Deleted !",
        isSuccess: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
        errorMsg: "Internal Server Error",
        isSuccess: false,
      },
      {
        status: 500,
      }
    );
  }
});
