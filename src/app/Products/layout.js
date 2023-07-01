import ProductCard from "@/Components/Product/ProductCard";
import React from "react";
const ProductLayout = ({ children }) => {
  const HeaderName = (props) => {
    return (
      <h2 className="font-bold border-b pb-2 relative">{props.name}</h2>
    );
  };

  const FollowUs = () => {
    return (
      <div className="flex gap-2 justify-between items-center">
        <div className=" flex w-full py-2 justify-center items-center flex-col text-sm bg-gray-100">
          <i className=" text-3xl uil uil-facebook" />
          <span>100</span> <span>Fans</span>
        </div>

        <div className=" flex w-full py-2 justify-center items-center flex-col text-sm bg-gray-100">
          <i className=" text-3xl uil uil-instagram" />
          <span>500</span> <span>Followers</span>
        </div>
        <div className=" flex w-full py-2 justify-center items-center flex-col text-sm bg-gray-100">
          <i className=" text-3xl uil uil-youtube" />
          <span>50</span> <span>Subscribers</span>
        </div>
      </div>
    );
  };
  return (
    <div className=" container m-auto   md:relative justify-between  flex-col-reverse md:flex-row flex  gap-5 ">
      <aside className=" md:w-[15%] md:fixed  md:mt-[140px] w-full    flex bg-white    flex-col gap-5 items-start ">
        <div className="w-full">
          <HeaderName name="Category" />
          <div className="mt-2 flex-col items-start  flex gap-2">
            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - Template
            </button>
            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - PS Presets
            </button>
            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - Microprojects
            </button>
            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - Cheetsheets
            </button>
            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - Web Template
            </button>

            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - EBooks
            </button>
            <button className="text-gray-600 hover:text-black hover:font-semibold">
              - Capstone Project
            </button>
          </div>
        </div>{" "}
        <div className="w-full">
          <HeaderName name="Follow Us" />
          <div className="mt-2 flex-col flex gap-2">
            <FollowUs />
          </div>
        </div>{" "}
      </aside>
      <main className=" w-full md:w-4/5 md:absolute md:right-0 text-justify">
        {children}
      </main>
    </div>
  );
};

export default ProductLayout;
