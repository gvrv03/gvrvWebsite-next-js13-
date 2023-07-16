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
      {/* <div className=" ">
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
                  strings: ["Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
          <p className="text-center">
            Hi, I'm Gaurav Narnaware, an Indian web developer working out of
            Maharashtra. I have a strong desire to make the technical and
            aesthetic components of digital goods come to life. When I'm
            creating, learning, exploring, and considering ways to improve
            things, I'm happy.
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
      </div> */}

      <div className="flex flex-col md:flex-row gap-5">
        <div className="">
          <img
            src="https://sahilpingale.github.io/portfolio/img/about-me.png"
            className=" "
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="uppercase pColor font-semibold" >What I Do</p>
          <p className="font-bold text-xl md:text-3xl">Your partner in digital transformation</p>
          <p className="  text-base md:text-lg   text-justify">
            Hi, I'm <span className="font-semibold pColor" >Gaurav Narnaware</span>, an Indian web developer
            working out of Maharashtra. I have a strong desire to make the
            technical and aesthetic components of digital goods come to life.
            When I'm creating, learning, exploring, and considering ways to
            improve things, I'm happy.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
