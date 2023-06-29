import React from "react";
const BlogsHeader = () => {
  return (
    <div className="fixed top-14  border-b  left-0 right-0 bg-white ">
      <div className="container md:px-0 p-5  m-auto flex bg-white justify-between items-baseline">
        <div className="text-sm md:text-base font-semibold ">
          Showing result for : <span className="pColor">All</span>
        </div>{" "}
        <div className="flex items-baseline gap-5">
          <button className="   text-sm md:text-base  font-semibold flex gap-2 items-baseline ">
            <i className=" uil-sort-amount-up uil text-sm md:text-base pColor " />
            <span className="">Sort</span>
          </button>
          <button className="   text-sm md:text-base  font-semibold flex gap-2 items-baseline">
            <i className="uil uil-filter text-sm md:text-base pColor " />
            <span className="">Filter</span>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default BlogsHeader;
