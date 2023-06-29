import { useUserAuth } from "@/Context/UserAuthContext";
import {
  AddProductReview,
  fetchProductReviews,
} from "@/Store/Actions/productReviewAction";
import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoadingSpinner, { BtnSpinner2 } from "../Spinner/LoadingSpinner";
import { DefButton } from "../UtilComponent";
import AverageReview from "./ProductReview/AverageReview";
import SingleStarCount from "./ProductReview/SingleStarCount";
import UserReview from "./ProductReview/UserReview";

const ProductReview = ({ productID }) => {
  const { userIDS, user } = useUserAuth();
  const [starsRating, setstarsRating] = useState({
    Star5: "50%",
    Star4: "90%",
    Star3: "100%",
    Star2: "8%",
    Star1: "10%",
  });
  const [reviewState, setreviewState] = useState("hidden");
  const [rating, setrating] = useState("");
  const [userReview, setuserReview] = useState("");
  const [reviewLoading, setreviewLoading] = useState(false);
  // to add Review
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductReviews(productID));
  }, []);

  const addNewReview = async (e) => {
    e.preventDefault();
    setreviewLoading(true);
    if (!user) {
      setreviewLoading(false);
      return toast.error("You need to Login");
    }
    const { payload } = await dispatch(
      AddProductReview({
        productID: productID,
        stars: rating,
        userID: userIDS.ID,
        text: userReview,
        Name: user.displayName,
        userProfileImg: user.photoURL,
      })
    );

    if (payload.isSuccess === true) {
      toast.success(payload.message);
      return setreviewLoading(false);
    }
    if (payload.isSuccess === false) {
      toast.error(payload.error.message);
      return setreviewLoading(false);
    }
  };

  const reviews = useSelector((state) => state.productReview);
  const { data, isLoading, error, count, totalStars, starCounts } = reviews;
  const averageStars = totalStars / data.length;
  console.log(starCounts);
  return (
    <>
      <section className=" bg-white">
        {/* Based on Review  */}
        <AverageReview averageStars={averageStars} count={count} />

        {/* Review Section */}
        <SingleStarCount starCounts={starCounts} />

        {/* User Review  */}
        <UserReview
          reviewState={reviewState}
          rating={rating}
          setrating={setrating}
          reviewLoading={reviewLoading}
          addNewReview={addNewReview}
          isLoading={isLoading}
          data={data}
        />
      </section>
    </>
  );
};

export default ProductReview;
