import initDB from "@/helper/initDB";
import ProductReviews from "@/Modal/ProductReviews";
import ProductDetail from "@/Modal/ProductDetail";
initDB();

import { NextResponse } from "next/server";

// --------------To Add Product Review--------------
export const POST = async (request) => {
  try {
    const Data = await request.json();

    // to Add In Database
    const addReview = await ProductReviews.create({ ...Data });

    return NextResponse.json(
      {
        data: addReview,
        message: "Thanks for your Valuable review !",
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

export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const id = searchParams.get("productID");
    const Reviews = await ProductReviews.find({ productID: id }).sort({
      createdAt: -1,
    });
    const starCounts = countStarRatings(Reviews);
    const totalStars = Reviews.reduce((acc, obj) => acc + obj.stars, 0);
    const averageStar = calculateStarAverage(Reviews);
    console.log(totalStars);
    return NextResponse.json(
      {
        data: Reviews,
        ReviewCount: Reviews.length,
        totalStars: totalStars,
        starCounts: averageStar,
        message: "Fetch Review Successfully",
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

//Method for count each star
const countStarRatings = (array) => {
  const starCounts = array.reduce((acc, obj) => {
    const stars = obj.stars;
    const key = "star" + stars;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  return starCounts;
};

const calculateStarAverage = (array) => {
  const starData = array.reduce(
    (acc, obj) => {
      const stars = obj.stars;
      acc[stars].totalStars += stars;
      acc[stars].totalRatings++;
      return acc;
    },
    {
      1: { totalStars: 0, totalRatings: 0 },
      2: { totalStars: 0, totalRatings: 0 },
      3: { totalStars: 0, totalRatings: 0 },
      4: { totalStars: 0, totalRatings: 0 },
      5: { totalStars: 0, totalRatings: 0 },
    }
  );

  const starAverages = {};
  for (let stars in starData) {
    const totalStars = starData[stars].totalStars;
    const totalRatings = starData[stars].totalRatings;
    const averagePercent =
      totalRatings !== 0 ? (totalStars / totalRatings) * 20 : 0;
    starAverages[`star${stars}`] = averagePercent;
  }

  return starAverages;
};
