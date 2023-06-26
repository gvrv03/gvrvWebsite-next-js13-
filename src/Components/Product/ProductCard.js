import { Rating, ToggleButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const ProductCard = ({ title, thumbnail, price, comAtPrice, id }) => {
  const [selected, setSelected] = useState(false);

  const router = useRouter();
  return (
    <div className="w-full hover:shadow-md border border-gray-200 bg-white p-5 h-fit rounded-sm  ">
      <div
        onClick={() => {
          router.push("/Products/Product/" + id);
        }}
        className="grid place-items-center p-5 "
      >
        <img className="md:h-60   cursor-pointer h-30" src={thumbnail} alt={title} />
      </div>
      <div className=" ">
        <h3 className="text-xs text-gray-400 font-semibold md:text-sm">
          EBOOK
        </h3>
        <h5
          onClick={() => {
            router.push("/Products/Product/" + id);
          }}
          className="text-xs  cursor-pointer  md:text-sm mt-3 font-semibold tracking-tight "
        >
          {title}
        </h5>
        <div className="flex items-center border-t-2 border-gray-50  justify-between mt-3 pt-2">
          <div className="flex gap-2 items-baseline justify-between">
            <span className="text-sm md:text-xl font-bold ">₹{price}</span>
            <strike className="text-[8px]  font-semibold ">
              ₹{comAtPrice}
            </strike>
          </div>
          <span className="text-[6px] md:text-sm  text-white bg-red-500 p-1 font-bold ">
            - {(100 - (price / comAtPrice) * 100).toFixed(1)} % OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
