"use client";
import { Legal } from "@/NavItem/TopNav";
import Link from "next/link";
import React, { useState } from "react";

const LeagleLayout = ({ children }) => {
  const [LegalNav, setLegal] = useState("-right-full");
  const toggleLegal = () => {
    if (LegalNav === "right-0") {
      setLegal("-right-full");
    } else {
      setLegal("right-0");
    }
  };
  const HeaderName = (props) => {
    return (
      <h2 className="font-bold     relative">
        {props.name}
        <span className="w-16 -mb-2 pColor absolute left-0 bottom-0" />
      </h2>
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
    <div className=" container m-auto   mt-[140px]  md:relative justify-between  flex-col-reverse md:flex-row flex   gap-5 ">
      <aside className=" md:w-[15%] md:fixed p-5  w-full    flex bg-white    flex-col gap-10 items-start ">
        <div className="w-full">
          <button onClick={toggleLegal} className="mb-5 md:hidden block">
            <i className="uil uil-angle-left-b pColor text-2xl" />
          </button>
          <div className=" ">
            <HeaderName name="More Pages" />
            <div className="mt-5   flex flex-col gap-5">
              {Legal.map((item, index) => {
                return (
                  <Link
                    onClick={toggleLegal}
                    href={item.location}
                    key={index}
                    className="flex gap-5"
                  >
                    <i className={`${item.icon}`} />
                    <p>{item.name}</p>
                  </Link>
                );
              })}
            </div>
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

export default LeagleLayout;
