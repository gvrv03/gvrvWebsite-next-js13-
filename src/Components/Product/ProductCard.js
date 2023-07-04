"use client";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion"

const ProductCard = ({
  title,
  fullTitle,
  thumbnail,
  price,
  comAtPrice,
  id,
}) => {
  const router = useRouter();
  return (
    <div className="w-full hover:shadow-md border border-gray-200 bg-white md:p-5 p-2 h-fit rounded-sm  ">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          router.push(
            "/Products/Product/" +
              fullTitle.replaceAll(" ", "_") +
              "?product=" +
              id
          );
        }}
        className="grid place-items-center "
      >
        <img
          className="md:h-44   cursor-pointer h-30"
          src={thumbnail}
          alt={title}
        />
      </motion.div>
      <div className=" ">
        <h3 className="text-xs text-gray-400 font-semibold md:text-sm">
          EBOOK
        </h3>
        <h5
          onClick={() => {
            router.push(
              "/Products/Product/" +
                fullTitle.replaceAll(" ", "_") +
                "?product=" +
                id
            );
          }}
          className="text-xs  cursor-pointer  md:text-sm mt-3 font-semibold tracking-tight "
        >
          {title}
        </h5>
        <div className="flex items-center   justify-between mt-3  align-baseline ">
          <div className="flex gap-2 items-baseline justify-between">
            <span className="text-sm md:text-base text-red-500 font-bold ">
              {(100 - (price / comAtPrice) * 100).toFixed(1)} off{" "}
            </span>
            <strike className="text-sm md:text-base font-semibold text-gray-500 ">
              ₹{comAtPrice}
            </strike>
            <span className="text-sm md:text-base font-bold ">₹{price}</span>
          </div>
        </div>
        <div className=" flex gap-2 mt-2  items-center ">
          <Rating name="read-only" value={4} readOnly />
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            className="h-5"
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
