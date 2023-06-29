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
  }, [dispatch]);

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
        <div className=" mx-auto ">
          {/* Based on Review  */}
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

          {/* Review  */}
          <div className="p-5 border border-gray-200 rounded-md">
            <div className="flex items-center w-full gap-3">
              <div>5</div>
              <div>
                <i className="bi bi-star-fill text-yellow-500" />
              </div>
              <div className="w-full border rounded-full">
                <div
                  style={{
                    width: !starCounts.star5 ? "0%" : starCounts.star5 + "%",
                  }}
                  className="p-1 rounded-full bg-yellow-300"
                />
              </div>
              <div> {!starCounts.star5 ? "0%" : starCounts.star5 + "%"}</div>
            </div>

            <div className="flex items-center w-full gap-3">
              <div>4</div>
              <div>
                <i className="bi bi-star-fill text-yellow-500" />
              </div>
              <div className="w-full border rounded-full">
                <div
                  style={{
                    width: !starCounts.star4 ? "0%" : starCounts.star4 + "%",
                  }}
                  className="p-1 rounded-full bg-yellow-300"
                />
              </div>
              <div>{!starCounts.star4 ? "0%" : starCounts.star4 + "%"}</div>
            </div>

            <div className="flex items-center w-full gap-3">
              <div>3</div>
              <div>
                <i className="bi bi-star-fill text-yellow-500" />
              </div>
              <div className="w-full border rounded-full">
                <div
                  style={{
                    width: !starCounts.star3 ? "0%" : starCounts.star3 + "%",
                  }}
                  className="p-1 rounded-full bg-yellow-300"
                />
              </div>
              <div>{!starCounts.star3 ? "0%" : starCounts.star3 + "%"}</div>
            </div>

            <div className="flex items-center w-full gap-3">
              <div>2</div>
              <div>
                <i className="bi bi-star-fill text-yellow-500" />
              </div>
              <div className="w-full border rounded-full">
                <div
                  style={{
                    width: !starCounts.star2 ? "0%" : starCounts.star2 + "%",
                  }}
                  className="p-1 rounded-full bg-yellow-300"
                />
              </div>
              <div>{!starCounts.star2 ? "0%" : starCounts.star2 + "%"}</div>
            </div>

            <div className="flex items-center w-full gap-3">
              <div>1</div>
              <div>
                <i className="bi bi-star-fill text-yellow-500" />
              </div>
              <div className="w-full border rounded-full">
                <div
                  style={{
                    width: !starCounts.star1 ? "0%" : starCounts.star1 + "%",
                  }}
                  className="p-1 rounded-full bg-yellow-300"
                />
              </div>
              <div>{!starCounts.star1 ? "0%" : starCounts.star1 + "%"}</div>
            </div>
          </div>
        </div>

        <div className=" mx-auto mt-10">
          <div className="flex justify-between flex-col mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
              Share your thoughts
            </h2>

            <h5 className="text-sm mt-2 md:text-md text-gray-500">
              If you’ve used this product, share your thoughts with other
              customers
            </h5>

            <button
              onClick={() => {
                if (reviewState === "block") {
                  setreviewState("hidden");
                } else {
                  setreviewState("block");
                }
              }}
              className="border p-2 text-center rounded-md mt-5 border-gray-300"
            >
              Write a review
            </button>
          </div>
          <form
            className={`${reviewState} transition-all delay-200 ease-linear mb-6`}
          >
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200  ">
              <textarea
                id="comment"
                onChange={(e) => {
                  setuserReview(e.target.value);
                }}
                rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  dark:placeholder-gray-400 "
                placeholder="Describe yor Experience"
                required
              ></textarea>
            </div>
            <p className="text-sm text-gray-400 pb-5">
              Reviews are public and include yor account info and you can't
              delete review after sending.
            </p>
            <div className="mb-5">
              <Rating
                name="simple-controlled"
                size="large"
                value={rating}
                onChange={(event, newValue) => {
                  setrating(newValue);
                }}
              />
            </div>

            <DefButton
              name="Post Review"
              loading={reviewLoading}
              btnStyle="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center pBtn bg-primary-700 rounded-md focus:ring-4 focus:ring-primary-200 "
              func={addNewReview}
            />
          </form>
          {isLoading && (
            <div className="grid place-items-center">
              <LoadingSpinner />
            </div>
          )}
          {!isLoading && data && data.length === 0 && (
            <div className="w-full border text-center p-5">No review Found</div>
          )}
          <div className="">
            {!isLoading &&
              data &&
              data.map((review, index) => {
                const dateObj = new Date(review.createdAt);
                const combinedDate =
                  dateObj.getDate() +
                  "-" +
                  (dateObj.getMonth() + 1) +
                  "-" +
                  dateObj.getFullYear();
                return (
                  <article
                    key={index}
                    className=" mb-6 text-base bg-white rounded-lg "
                  >
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                          <img
                            className="mr-2 border border-gray-500   w-6 h-6 rounded-full"
                            src={review.userProfileImg}
                            alt="Michael Gough"
                          />
                          {review.Name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time
                            pubdate
                            datetime="2022-02-08"
                            title="February 8th, 2022"
                          >
                            {combinedDate}
                          </time>
                        </p>
                      </div>
                      <Rating name="read-only" value={review.stars} readOnly />{" "}
                    </footer>
                    <p className="text-gray-500 ml-8  bg-gray-50 p-5 mt-2 rounded-md ">
                      {review.text}
                    </p>
                  </article>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductReview;
