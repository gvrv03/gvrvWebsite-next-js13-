import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
const ProductHeader = () => {
  return (
    <div className="fixed top-16  border-b-2  left-0 right-0 bg-white ">
      <div className="container md:px-0 px-5 py-5 m-auto flex justify-between items-center">
        <div className="text-xs md:text-sm ">
          Showing result for : <span className="ml-5  text-blue-500">All</span>
        </div>
        <div className="flex gap-5 items-center">
          <button className=" text-xs items-center md:text-sm flex gap-2">
            <SortIcon /> <span>Sort</span>
          </button>
          <button className=" text-xs items-center md:text-sm flex gap-2">
            <FilterAltIcon /> <span>Filter</span>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
