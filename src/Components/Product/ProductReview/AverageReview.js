import { Rating } from "@mui/material";
import React from "react";

const AverageReview = ({ averageStars, count }) => {
  return (
    <div className="flex flex-col mb-5">
      <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
        Customer Reviews
      </h2>
      <div className="flex items-center gap-5 mt-2">
        <Rating
          name="read-only"
          value={averageStars ? averageStars : 0}
          readOnly
        />{" "}
        <p className="text-gray-500 text-sm">Based on {count} reviews</p>
      </div>{" "}
    </div>
  );
};

export default AverageReview;
