"use client"
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
      <footer className="  m-auto  mt-5  rounded-sm ">
        <div className="w-full mx-auto     bg-white md:p-6 p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              Gaurav
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
              <Link href="/" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="mr-4 hover:underline md:mr-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
  );
};

export default Footer;
