"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  return (
    <section className={`text-gray-600 CSSPAttern2 h-screen -mx-5 body-font `}>
      <div className=" mx-auto gap-10 justify-center flex-col flex  h-full items-center">
        <div className=" flex items-center justify-center backdrop-blur-sm">
          <div className=" rounded-full overflow-hidden    w-60 h-60 grid place-items-center p-10     -8 shadow-xl      -white">
            <Image
              width={200}
              height={200}
              alt="Gaurav Narnaware"
              src="/gaurav.svg"
              priority={1}
              className="    rounded-full  w-full h-full "
            />
          </div>
          {/* <div className="absolute left-16 px-10 py-5 float  dark:text-white          -gray-500 backdrop-blur-md rounded-sm top-5">
                Web Developer
              </div> */}
        </div>
        <div className="md:text-4xl w-full justify-center items-center gap-5 sm:text-3xl text-xl   flex-col flex font-bold">
          <h1 className="flex justify-center items-center">
            <span className="mr-3"> I am </span>
            <Typewriter
              options={{
                strings: ["Web Developer", "Software Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <h3 className="md:text-xl text-lg text-gray-400 font-bold">
            Based in Maharashtra, India.
          </h3>
        </div>

        <div className="  relative font-bold float flex gap-5 justify-center items-center px-20 py-5 rounded-full">
          <div className=" w-10 rounded-full h-20 grid place-items-center     -2">
            <div className="w-1 bg-gray-300 h-10" />
          </div>
          <div>Swipe Up</div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
