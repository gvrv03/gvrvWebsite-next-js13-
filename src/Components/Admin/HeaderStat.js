"use client";
import { useUserAuth } from "@/Context/UserAuthContext";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/Store/Actions/blogAction";
import LoopIcon from "@mui/icons-material/Loop";
import { fetchUsers } from "@/Store/Actions/userAction";
import { IconButton } from "@mui/material";
import { BtnSpinner, BtnSpinner2 } from "../Spinner/LoadingSpinner";
import { useState } from "react";
const HeaderStat = () => {
  const { user } = useUserAuth();
  const [updater, setupdater] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
    dispatch(fetchUsers());
  }, [updater]);
  const { blogs, users } = useSelector((state) => state);

  const StatHeader = ({ blogs, users }) => {
    const HeaderCard = ({ name, value, icon, loading }) => {
      return (
        <div className="">
          <div className="  px-5 py-5 bg-gray-100 flex gap-5 relative justify-center items-center  rounded-sm">
            {icon}
            <div className=" ">
              <div className="flex gap-5">
                <h2 className="title-font font-medium  text-xl ">{value}</h2>
                {loading && <BtnSpinner />}
              </div>

              <p className="leading-relaxed text-sm ">{name}</p>
            </div>
          </div>
        </div>
      );
    };
    return (
      <section className="text-gray-600 body-font">
        <div className="   mx-auto">
          <div className="grid gap-5 grid-cols-2 md:grid-cols-4 ">
            <HeaderCard
              name="Blogs"
              value={blogs.data.length}
              loading={blogs.isLoading}
              icon={<NewspaperIcon className="pColor text-3xl" />}
            />
            <HeaderCard
              name="Users"
              value={users.data.length}
              loading={users.isLoading}
              icon={<SupervisorAccountIcon className="pColor text-3xl" />}
            />
          </div>
        </div>
      </section>
    );
  };
  return (
    <div>
      <div className=" w-full  bg-white p-5 ">
        {" "}
        <div className=" justify-between items-center  rounded-full  flex mb-5">
          <div className="bg-gray-100  font-bold px-10 py-2 rounded-full ">
            Hello!{" "}
            <span className="dark:text-red-600 text-indigo-600">
              {user && user.displayName}
            </span>{" "}
          </div>

          <div className="rounded-full   flex gap-5 justify-center items-center bg-gray-100   overflow-hidden p-1 w-auto">
            <IconButton
              onClick={() => {
                setupdater(Math.random());
              }}
              aria-label="LoopIcon"
              className="ml-5"
              size="small"
            >
              <LoopIcon className="text-2xl  " />
            </IconButton>
            <img
              className="w-10 h-10 rounded-full"
              src={user && user.photoURL}
              alt={user && user.displayName}
            />
          </div>
        </div>
        <StatHeader blogs={blogs} users={users} />
      </div>
    </div>
  );
};

export default HeaderStat;
