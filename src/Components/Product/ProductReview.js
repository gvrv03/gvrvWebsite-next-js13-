 
import {
  AddProductReview,
  fetchProductReviews,
} from "@/Store/Actions/productReviewAction";
import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import LoadingSpinner, { BtnSpinner2 } from "../Spinner/LoadingSpinner";
import { DefButton } from "../UtilComponent";
import AverageReview from "./ProductReview/AverageReview";
import SingleStarCount from "./ProductReview/SingleStarCount";
import UserReview from "./ProductReview/UserReview";
import { useUserNextAuth } from "@/Context/useNextAuthContext";

const ProductReview = ({ productID }) => {
  const [reviewState, setreviewState] = useState("hidden");
  const [rating, setrating] = useState(1);
  const [userReview, setuserReview] = useState("");
  const [reviewLoading, setreviewLoading] = useState(false);
  // to add Review
  const { userIDS, userData } = useUserNextAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductReviews(productID));
  }, [dispatch]);

  const addNewReview = async (e) => {
    e.preventDefault();
    setreviewLoading(true);
    if (!userData) {
      setreviewLoading(false);
      return toast.error("You need to Login");
    }
    const { payload } = await dispatch(
      AddProductReview({
        productID: productID,
        stars: rating,
        userID: userIDS.ID,
        text: userReview,
        Name: userData.name,
        userProfileImg: userData.image,
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

  return (
    <section className=" bg-white">
      {/* Based on Review  */}
      <AverageReview averageStars={averageStars} count={count} />

      {/* Review Section */}
      <SingleStarCount starCounts={starCounts} />

      {/* User Review  */}
      <UserReview
        setreviewState={setreviewState}
        reviewState={reviewState}
        rating={rating}
        setrating={setrating}
        setuserReview={setuserReview}
        reviewLoading={reviewLoading}
        addNewReview={addNewReview}
        isLoading={isLoading}
        data={data}
      />
    </section>
  );
};

export default ProductReview;
