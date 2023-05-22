"use client"
import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import AllSkillsItem from "@/NavItem/AllSkillsItem";
const AllSkills = ({ fun, mState }) => {
  const SKillProgress = (props) => {
    const { icon, percentage } = props;
    return (
      <div className=" w-24 ">
        <CircularProgressbarWithChildren value={percentage}>
          <div className=" w-full grid place-items-center">
            {/* <Image/> */}
            <img className=" w-10  " src={icon} alt="doge" />
            <div className="text-sm md:grid hidden  place-items-center mt-2">
              <strong className="text-sm">{percentage}%</strong>
            </div>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    );
  };

  return (
    <section
      className={`w-full h-full ${mState} fixed top-0  place-items-center  left-0`}
    >
      <div
        className="w-full absolute left-0 cursor-pointer top-0 h-full backdrop-blur-md"
        onClick={() => {
          fun("hidden");
        }}
      />
      <div className=" bg-white dark:bg-gray-900 gap-10 grid place-items-center p-10 z-10 h-4/5 w-4/5  absolute  ">
        <h4 className="font-bold text-2xl text-center">Skills</h4>
        <div className="w-10 h-1 bg-gray-200 dark:bg-gray-700  rounded-full" />

        <div className="h-full  overflow-y-scroll">
          <div className="grid place-items-center mb-10">
            <h4 className="font-bold text-xl pb-10">Programming Languages</h4>
            <div className="flex justify-center gap-10  flex-wrap items-center">
              {AllSkillsItem.pLanguages.map((i, index) => {
                return (
                  <SKillProgress
                    icon={i.sIcon}
                    key={index}
                    percentage={i.percentage}
                  />
                );
              })}
            </div>
          </div>

          <div className="grid place-items-center mb-10">
            <h4 className="font-bold text-xl pb-10">Web Development</h4>
            <div className="flex justify-center gap-10  flex-wrap items-center">
              {AllSkillsItem.webDev.map((i, index) => {
                return (
                  <SKillProgress
                    icon={i.sIcon}
                    key={index}
                    percentage={i.percentage}
                  />
                );
              })}
            </div>
          </div>

          <div className="grid place-items-center mb-10">
            <h4 className="font-bold text-xl pb-10">Tools</h4>
            <div className="flex justify-center gap-10  flex-wrap items-center">
              {AllSkillsItem.tools.map((i, index) => {
                return (
                  <SKillProgress
                    icon={i.sIcon}
                    key={index}
                    percentage={i.percentage}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllSkills;
