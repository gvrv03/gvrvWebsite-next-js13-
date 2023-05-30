"use client"
import React from "react";
import { useState } from "react";
import AllSkills from "../AllSkills";
import HeaderName from "./HeaderName";

const Skills = () => {
  const SkillCard = ({ name, desc, icon }) => {
    return (
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" bg-white p-6 rounded-sm shadow-sm ">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium  title-font mb-2">
            {name}
          </h2>
          <p className="leading-relaxed text-sm text-slate-500">
            {desc}
          </p>
        </div>
      </div>
    );
  };

  const [modalState, setmodalState] = useState("hidden");
  return (
    <div className="  m-auto">
      <HeaderName name="My Skills" />
      <div className="flex flex-wrap -m-4">
        <SkillCard
          name="Developer Skill"
          desc="A great knowledge of HTML / CSS, Javascript and React.js. I make responsive web applications with tailwind CSS with interactive UI's designs."
        />
        <SkillCard
          name="UI Design"
          desc="A love for design and a good eye for creativity. I have proficiency in wireframing, color theory and visual communication."
        />
        <SkillCard
          name="Node Js"
          desc="A lot of exprence in to develop complicated backend in web based Applications using React and Next js Applications"
        />
      </div>
      <button
        onClick={() => {
          setmodalState("grid");
        }}
        className="flex mx-auto mt-16 text-white border-0 py-2 px-8 focus:outline-none bg-indigo-500  hover:bg-indigo-600  rounded-sm pBtn text-lg"
      >
        More
      </button>

      <AllSkills mState={modalState} fun={setmodalState} />
    </div>
  );
};
export default Skills;
