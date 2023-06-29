import LoadingSpinner from "@/Components/Spinner/LoadingSpinner";
import { DefButton } from "@/Components/UtilComponent";
import { Rating } from "@mui/material";
import React from "react";

const UserReview = ({
  reviewState,
  rating,
  setrating,
  reviewLoading,
  addNewReview,
  isLoading,
  data,
}) => {
  return (
    <div className=" mx-auto mt-10">
      <div className="flex justify-between flex-col mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
          Share your thoughts
        </h2>

        <h5 className="text-sm mt-2 md:text-md text-gray-500">
          If you’ve used this product, share your thoughts with other customers
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
          Reviews are public and include yor account info and you cant delete
          review after sending.
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
  );
};

export default UserReview;
