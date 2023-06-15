import { Rating } from "@mui/material";
import React, { useState } from "react";

const ProductReview = () => {
  const [value, setvalue] = useState(4);
  const [starsRating, setstarsRating] = useState({
    Star5: "50%",
    Star4: "90%",
    Star3: "100%",
    Star2: "8%",
    Star1: "10%",
  });
  const [reviewState, setreviewState] = useState("hidden");
  return (
    <>
      <section class=" bg-white">
        <div class=" mx-auto ">
          {/* Based on Review  */}
          <div class="flex flex-col mb-5">
            <h2 class="text-lg lg:text-2xl font-bold text-gray-900 ">
              Customer Reviews
            </h2>
            <div className="flex items-center gap-5 mt-2">
              <Rating name="read-only" value={value} readOnly />{" "}
              <p className="text-gray-500 text-sm">Based on 15000 reviews</p>
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
                  style={{ width: starsRating.Star5 }}
                  className="p-1 rounded-full bg-yellow-300"
                />
              </div>
              <div>{starsRating.Star5}</div>
            </div>

            <div className="flex items-center w-full gap-3">
              <div>4</div>
              <div>
                <i className="bi bi-star-fill text-yellow-500" />
              </div>
              <div className="w-full border rounded-full">
                <div
                  style={{ width: starsRating.Star4 }}
                  className="p-1 rounded-full bg-yellow-300"
                />
              </div>
              <div>{starsRating.Star4}</div>
            </div>

            <div className="flex items-center w-full gap-3">
              <div>3</div>
              <div>
                <i className="bi bi-star-fill text-yellow-500" />
              </div>
              <div className="w-full border rounded-full">
                <div
                  style={{ width: starsRating.Star3 }}
                  className="p-1 rounded-full bg-yellow-300"
                />
              </div>
              <div>{starsRating.Star3}</div>
            </div>

            <div className="flex items-center w-full gap-3">
              <div>2</div>
              <div>
                <i className="bi bi-star-fill text-yellow-500" />
              </div>
              <div className="w-full border rounded-full">
                <div
                  style={{ width: starsRating.Star2 }}
                  className="p-1 rounded-full bg-yellow-300"
                />
              </div>
              <div>{starsRating.Star2}</div>
            </div>

            <div className="flex items-center w-full gap-3">
              <div>1</div>
              <div>
                <i className="bi bi-star-fill text-yellow-500" />
              </div>
              <div className="w-full border rounded-full">
                <div
                  style={{ width: starsRating.Star1 }}
                  className="p-1 rounded-full bg-yellow-300"
                />
              </div>
              <div>{starsRating.Star1}</div>
            </div>
          </div>
        </div>
        <div class=" mx-auto mt-10">
          <div class="flex justify-between flex-col mb-6">
            <h2 class="text-lg lg:text-2xl font-bold text-gray-900 ">
              Share your thoughts
            </h2>

            <h5 className="text-sm mt-2 md:text-md text-gray-500">
              If you’ve used this product, share your thoughts with other
              customers
            </h5>

            <button
              onClick={() => {
                setreviewState("block");
              }}
              className="border p-2 text-center rounded-md mt-5 border-gray-300"
            >
              Write a review
            </button>
          </div>
          <form class={`${reviewState} transition-all delay-200 ease-linear mb-6`}>
            <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200  ">
              <label for="comment" class="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6"
                class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  dark:placeholder-gray-400 "
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center pBtn bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
            >
              Post comment
            </button>
          </form>
          <article class="p-6 mb-6 text-base bg-white rounded-lg ">
            <footer class="flex justify-between items-center mb-2">
              <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 ">
                  <img
                    class="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough"
                  />
                  Michael Gough
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  <time
                    pubdate
                    datetime="2022-02-08"
                    title="February 8th, 2022"
                  >
                    Feb. 8, 2022
                  </time>
                </p>
              </div>
              <button
                id="dropdownComment1Button"
                data-dropdown-toggle="dropdownComment1"
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
                <span class="sr-only">Comment settings</span>
              </button>

              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownComment1"
                class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Remove
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Report
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
            <p class="text-gray-500 dark:text-gray-400">
              Very straight-to-point article. Really worth time reading. Thank
              you! But tools are just the instruments for the UX designers. The
              knowledge of the design tools are as important as the creation of
              the design strategy.
            </p>
            <div class="flex items-center mt-4 space-x-4">
              <button
                type="button"
                class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                <svg
                  aria-hidden="true"
                  class="mr-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                Reply
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default ProductReview;
