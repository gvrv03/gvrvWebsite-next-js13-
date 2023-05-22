"use client"
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  return (
    <section
      className={`text-gray-600 gradientA h-screen -mx-5 body-font `}
    >
      <div className="container mx-auto justify-center flex-col flex pt-10 h-full items-center">
        <div className=" relative w-2/4 h-2/4 flex items-center justify-center">
          <div className=" rounded-full overflow-hidden md:h-96 md:w-96   w-60 h-60 grid place-items-center p-10 border-8 shadow-2xl  border-white ">
            <Image
              width={500}
              height={500}
              alt="Gaurav Narnaware"
              src="/gaurav.svg"
              priority={1}
              className="md:h-full md:w-fullh-full rounded-full   w-60 h-60 "
            />
          </div>
          {/* <div className="absolute left-16 px-10 py-5 float  dark:text-white border border-gray-500 backdrop-blur-md rounded-sm top-5">
                Web Developer
              </div> */}
        </div>
        <h1 className="md:text-7xl mt-0 md:mt-10 text-3xl flex text-white font-bold">
          <span className="mr-3"> I am </span>
          <Typewriter
            options={{
              strings: ["Web Developer", "Software Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h3 className="text-xl text-gray-200 mt-5 font-bold">
          Based in Maharashtra, India.
        </h3>

        <div className=" text-white relative font-bold float mt-20 flex gap-5 justify-center items-center px-20 py-5 rounded-full">
          <div className=" w-10 rounded-full h-20 grid place-items-center border-2">
            <div className="w-1 bg-white h-10" />
          </div>
          <div>Swipe Up</div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
