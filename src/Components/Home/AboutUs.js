"use client"
import React from "react";
import HeaderName from "./HeaderName";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="container  m-auto">
      <HeaderName name="About Us" />
      <div className=" ">
        <div className="-z-50 w-auto h-80 rounded-full  overflow-hidden grid place-items-center">
          <Image
            width={300}
            height={100}
            className="object-cover object-center rounded"
            alt="hero"
            // style={{width:"auto",height:"auto"}}
            src="/gaurav.svg"
          />
        </div>
        <div className="text-justify w-full mt-10">
          <h3 className="font-semibold flex  items-center justify-center text-2xl mb-5">
            I am
            <span className="ml-2 font-bold  text-red-600 text-center ">
              <Typewriter
                options={{
                  strings: ["Web Developer", "Software Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
          <p className="text-center">
            Hi there! Im a passionate web developer with a love for all things
            digital. I have been in the industry for over 2 years, and during
            that time, I have honed my skills in HTML, CSS, JavaScript, and
            other web development frameworks.
          </p>
          <div className=" grid place-items-center">
            <Link
              href="/gvrvresume.pdf"
              download
              className="py-2 pBtn text-center px-10  bg-indigo-500 dark:bg-red-500  dark:hover:bg-red-600 hover:bg-indigo-600   text-lg rounded-sm text-white mt-5 font-bold "
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
