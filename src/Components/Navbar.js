"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { useUserAuth } from "../../lib/Context/UserAuthContext";
import { useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";

import Sidebar from "./Sidebar";
import { useUserAuth } from "@/Context/UserAuthContext";
import UserDropDown from "./UserDropDown";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import SearchAll from "./UtilityComponents/SearchAll";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { user } = useUserAuth();
  const { data } = useSession();
  const session = useSession();
console.log(session);
  const router = useRouter();
  return (
    <>
      <nav className=" py-1 md:px-0 px-5  fixed z-50 w-full left-0 bg-white backdrop-blur-2xl top-0 ">
        <div className=" flex container m-auto flex-wrap items-center justify-between mx-auto">
          {/* <div className=" flex flex-wrap container items-center justify-between mx-auto"> */}
          <Link href="/" className="flex items-center">
            <span className="border w-10 h-10 grid  rounded-full place-items-center  text-2xl pColor rotate-45 font-bold">
              G
            </span>
            <span className="text-xl  md:block hidden font-semibold ml-2 ">
              Gaurav
            </span>
          </Link>
          <div
            type="button"
            className="inline-flex items-center py-2  gap-5 text-sm text-gray-500 rounded-lg dark:text-gray-400 "
          >
            <SearchAll />

            {!data ? (
              <Link
                href="/Auth/SignIn"
                className=" border w-6 h-6  cursor-pointer grid place-items-center   rounded-full"
              >
                <i className="bi bi-person-fill"></i>
              </Link>
            ) : (
              <UserDropDown user={data?.user} />
            )}
            <Sidebar />
          </div>
        </div>
      </nav>
    </>
  );
};

export const AppBarNav = ({ handleDrawerOpen, open, AppBar }) => {
  const { user } = useUserAuth();

  return (
    <AppBar position="fixed" color="primary" open={open}>
      <Toolbar className="flex justify-between">
        <div className="flex items-center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin
          </Typography>
        </div>

        <div
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center py-2  gap-5 text-sm text-gray-500 rounded-lg dark:text-gray-400 "
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          {!user ? (
            <Link
              href="/Authentication"
              className=" border w-6 h-6  cursor-pointer grid place-items-center   rounded-full"
            >
              <i className="bi bi-person-fill"></i>
            </Link>
          ) : (
            <UserDropDown />
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
