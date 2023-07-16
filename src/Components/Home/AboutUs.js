"use client";
import React from "react";
import HeaderName from "./HeaderName";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="m-auto">
      <HeaderName name="About Us" />

      <div className="flex flex-col md:flex-row gap-5">
        <div className="">
          <img
            src="/about.png"
            className=" "
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-14">
          <div className="flex flex-col gap-5">
            <p className="uppercase pColor font-semibold">What I Do</p>
            <p className="font-bold text-xl md:text-3xl">
              Your partner in digital transformation
            </p>
            <p className="  text-base md:text-lg   text-justify">
              Hi, I am{" "}
              <span className="font-semibold pColor">Gaurav Narnaware</span>, an
              Indian web developer working out of Maharashtra. I have a strong
              desire to make the technical and aesthetic components of digital
              goods come to life. When I am creating, learning, exploring, and
              considering ways to improve things.
            </p>
            <div className="">
              <Link
                href="/gvrvresume.pdf"
                download={true}
                className="py-2 pBtn text-center px-10 pBtn"
              >
                Download CV
              </Link>
            </div>
          </div>

          <div className="flex  w-full flex-col gap-5">
            <p className="uppercase pColor font-semibold">How i do it</p>
            <p className="font-bold text-xl md:text-3xl">
              My 4 step process for building MERN stack projects
            </p>
            <div className="flex flex-col gap-2" >
              <div className="flex gap-2 items-center">
                <span className="p-2  rounded-full h-2 grid place-items-center w-2 bgpColor  ">
                  <span className="h-2 w-2 absolute  rounded-full bg-white p-1" />
                </span>
                <span>Plan and define the project</span>
              </div>

              <div className="flex gap-2 items-center">
                <span className="p-2  rounded-full h-2 grid place-items-center w-2 bgpColor  ">
                  <span className="h-2 w-2 absolute  rounded-full bg-white p-1" />
                </span>
                <span>Build the project</span>
              </div>

              <div className="flex gap-2 items-center">
                <span className="p-2  rounded-full h-2 grid place-items-center w-2 bgpColor  ">
                  <span className="h-2 w-2 absolute  rounded-full bg-white p-1" />
                </span>
                <span>Test & Optimize</span>
              </div>

              <div className="flex gap-2 items-center">
                <span className="p-2  rounded-full h-2 grid place-items-center w-2 bgpColor  ">
                  <span className="h-2 w-2 absolute  rounded-full bg-white p-1" />
                </span>
                <span>Deploy the project</span>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
