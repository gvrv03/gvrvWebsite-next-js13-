"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SingleHeader = ({ firstTitle, title2Nd }) => {
  const router = useRouter();
  return (
    <div className="fixed top-14  border-b z-40 left-0 right-0 bg-white ">
      <div className="container md:px-0  font-semibold text-gray-600  px-5 py-5 m-auto flex bg-white gap-2  items-baseline">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          <i className="uil uil-estate pColor" />
        </button>
        {firstTitle && (
          <>
            <i className="uil uil-angle-right-b pColor" />
            <button  className="hover:text-black"   
              onClick={() => {
                router.push(firstTitle.location);
              }}
            >
              {firstTitle.name}
            </button>
          </>
        )}
        <i className="uil uil-angle-right-b pColor" />
        <button  className="hover:text-black"   >{title2Nd}</button>
      </div>
    </div>
  );
};

export default SingleHeader;
