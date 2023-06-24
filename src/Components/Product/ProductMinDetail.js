"use client";
import React, { useState } from "react";
import Allproducts from "@/Components/Product/Allproducts";
import DetailTabs from "@/Components/Product/DetailTabs";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ProductCard from "@/Components/Product/ProductCard";
import { Rating, ToggleButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ProductMinDetail = ({
  thumbnail,
  title,
  description,
  price,
  artical,
  images,
}) => {
  // Saved Function

  const [selected, setSelected] = useState(false);
  return (
    <section className=" mt-5 grid grid-cols-1  h-90 overflow-y-scroll ">
      {/* short description  */}
      <div className="bg-white p-5">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="lg:w-1/2  grid place-items-center border p-5 w-full lg:h-auto ">
            <img
              alt="ecommerce"
              className="object-cover object-center rounded"
              src={thumbnail}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <Rating name="read-only" value={3} readOnly />
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5" />

            <div className=" md:relative z-40 md:border-none border fixed w-full md:bottom-auto md:left-auto md:right-auto md:p-0 bottom-0 left-0 right-0 bg-white p-5">
              <div className="flex container m-auto">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{price}
                </span>

                <button className="flex ml-auto mr-5 rounded-sm py-2 px-6 pBtn">
                  Buy Now
                </button>

                <ToggleButton
                  value="check"
                  selected={selected}
                  onChange={(e) => {
                    e.preventDefault()
                    setSelected(!selected);
                  }}
                >
                  {selected ? (
                    <FavoriteIcon className="text-red-600" />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </ToggleButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* All Detail Section  */}
      <div className=" bg-white mt-5 ">
        <DetailTabs artical={artical} title={title} images={images} />
      </div>{" "}
      {/* Reccomended Products  */}
      <div>
        <h2 className="text-lg bg-white p-5 mt-5 lg:text-2xl font-bold text-gray-900 ">
          Recommended Products
        </h2>
      </div>
    </section>
  );
};

export default ProductMinDetail;
