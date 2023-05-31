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
      <h2 className="font-bold text-lg relative">
        {props.name}
        <span className="w-16 -mb-2 pColor absolute left-0 bottom-0" />
      </h2>
    );
  };

  return (
    <section className=" m-auto h-full  container">
      <button
        onClick={toggleLegal}
        className="md:hidden block fixed top-2/4 right-0 bgpColor rounded-l-full p-2 "
      >
        <i className="uil uil-angle-left-b text-white text-2xl" />
      </button>
      <div className=" mt-24    md:flex-row flex-col gap-5 flex">
        <main className="  w-full md:w-9/12 h-screen ">{children}</main>
        <aside
          className={`w-full md:w-1/4 bg-white fixed md:relative transition-all ease-linear delay-300 md:top-0 md:h-auto md:right-0 top-20 ${LegalNav}  h-full p-5 `}
        >
          <button onClick={toggleLegal} className="mb-5 md:hidden block">
            <i className="uil uil-angle-left-b pColor text-2xl" />
          </button>
          <div className=" ">
            <HeaderName name="More Pages" />
            <div className="mt-5 h-64 overflow-y-scroll flex flex-col gap-5">
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
        </aside>
      </div>
    </section>
  );
};

export default LeagleLayout;
