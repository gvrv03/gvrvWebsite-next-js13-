"use client";
import MainCard from "@/Components/Profile/MainCard";
import { useUserAuth } from "@/Context/UserAuthContext";
import Link from "next/link";
import React, { useEffect } from "react";

const page = () => {
  const { user } = useUserAuth();

  return (
    <div className="mt-24 flex-col flex gap-5">
      {" "}
      <ol className="inline-flex bg-white p-5 w-full items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 "
          >
            <i className="uil uil-estate mr-2 pColor" />
            Home
          </Link>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
              Profile
            </span>
          </div>
        </li>
      </ol>
      {user ? (
        <section>
          <MainCard />
        </section>
      ) : (
        <div className="bg-white p-5 font-semibold">
          You need Sign In! <Link href="/Authentication" className="pColor"> Sign In</Link>{" "}
        </div>
      )}
    </div>
  );
};

export default page;
