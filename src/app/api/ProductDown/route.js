import initDB from "@/helper/initDB";
initDB();
import { NextResponse } from "next/server";

// --------------To Download Product--------------
export const POST = async (request) => {
  try {
    const response = fetch(
      "https://firebasestorage.googleapis.com/v0/b/personalportpolio.appspot.com/o/Product%2FJavaScript%20Dashboard%20Masterclass%20%5Bvideo%20course%5D%2FProductFile%2Fhorizon-tailwind-react-main.zipd60aaf4c-544f-4563-96ca-05fb96891cc2?alt=media&token=1cb1355f-5359-40a1-8020-f16a1dd4aeaf"
    );

    console.log(response);
    return NextResponse.json(response);
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
