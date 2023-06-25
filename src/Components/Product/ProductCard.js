import { Rating } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ title, thumbnail, price, comAtPrice, id }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/Products/Product/" + id);
      }}
      className="w-full  bg-white cursor-pointer p-5 h-fit rounded-sm  "
    >
      <div className="grid place-items-center p-5 ">
        <img className="md:h-60  h-40" src={thumbnail} alt={title} />
      </div>
      <div className=" ">
        <h3 className="text-xs text-gray-400 font-semibold md:text-sm">
          EBOOK
        </h3>
        <h5 className="text-xs md:text-sm mt-3 font-semibold tracking-tight ">
          {title}
        </h5>
        <div className="flex items-center border-t-2 border-gray-50  justify-between mt-3 pt-2">
          <div className="flex gap-2 items-baseline justify-between">
            <span className="text-sm md:text-xl font-bold ">₹{price}</span>
            <strike className="text-[8px]  font-semibold ">₹{comAtPrice}</strike>
          </div>
          <span className="text-[6px]  text-white bg-red-500 p-1 font-bold ">
            - {(100 - (price / comAtPrice) * 100).toFixed(1)} % OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
