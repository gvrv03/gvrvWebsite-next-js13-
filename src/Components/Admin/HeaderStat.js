"use client"
import { useUserAuth } from "@/Context/UserAuthContext";
import React from "react";
const HeaderStat = () => {
  const { user } = useUserAuth();

  const StatHeader = () => {
    const HeaderCard = () => {
      return (
        <div className="">
          <div className="  px-5 py-5 bg-gray-100 flex gap-5 justify-center items-center  rounded-sm">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className=" pColor w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M8 17l4 4 4-4m-4-5v9"></path>
              <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
            </svg>
            <div className=" ">
              <h2 className="title-font font-medium  text-xl ">
                2.7K
              </h2>
              <p className="leading-relaxed text-sm ">
                Downloads
              </p>
            </div>
          </div>
        </div>
      );
    };
    return (
      <section className="text-gray-600 body-font">
        <div className="container  mx-auto">
          <div className="grid gap-5 grid-cols-2 md:grid-cols-4 ">
            <HeaderCard />
            <HeaderCard />
            <HeaderCard />
            <HeaderCard />
          </div>
        </div>
      </section>
    );
  };
  return (
    <div>
      <div className=" w-full  bg-white p-5 ">
        {" "}
        <div className=" justify-between items-center  rounded-full  flex mb-5">
          <div className="bg-gray-100  font-bold px-10 py-2 rounded-full ">
            Hello!{" "}
            <span className="dark:text-red-600 text-indigo-600">
              {user && user.displayName}
            </span>{" "}
          </div>

          <div className="rounded-full   bg-gray-100   overflow-hidden p-1 w-auto">
            <img
              className="w-10 h-10 rounded-full"
              src={user && user.photoURL}
              alt={user && user.displayName}
            />
          </div>
        </div>
        <StatHeader />
      </div>
    </div>
  );
};

export default HeaderStat;
