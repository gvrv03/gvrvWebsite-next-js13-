"use client";
import TopNavBar from "@/Components/MyAccount/TopNavBar";
import { useUserNextAuth } from "@/Context/useNextAuthContext";
import { UserAccountNav } from "@/NavItem/TopNav";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MyAccountLayout = ({ children }) => {
  const [navbar, setnavbar] = useState(false);
  const { isLogin, isAdmin } = useUserNextAuth();

  const toggleNav = () => {
    if (navbar) {
      setnavbar(false);
    } else {
      setnavbar(true);
    }
  };

  const router = useRouter();
  if (isLogin) {
    return (
      <div className=" container m-auto mt-20  relative justify-between flex gap-5 ">
        <aside
          className={` w-[55%] md:w-[15%] transition-all delay-100 ease-linear h-screen md:h-[85vh] fixed flex bg-white z-40  ${
            navbar ? "left-0" : "-left-full"
          }  md:left-auto top-28 md:top-auto  p-5 items-start   flex-col gap-5     `}
        >
          <button
            onClick={toggleNav}
            className="absolute right-2 md:hidden  text-lg top-2 bg-gray-50 rounded-sm w-7 h-7 grid place-items-center "
          >
            <i className="uil uil-times" />
          </button>
          {UserAccountNav.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  router.push(item.location);
                  setnavbar(false);
                }}
                className="flex gap-2"
              >
                <i className={`${item.icon}`} />
                <h1>{item.name}</h1>{" "}
              </button>
            );
          })}

          {isAdmin && (
            <button
              onClick={() => {
                router.push("/Admin");
                setnavbar(false);
              }}
              className="flex gap-2"
            >
              <i className={`pColor uil uil-chart-pie-alt`} />
              <h1>Dashboard</h1>{" "}
            </button>
          )}
        </aside>
        <main className=" w-full md:w-4/5 absolute right-0 text-justify">
          <TopNavBar navbar={navbar} toggleNav={toggleNav} />
          <div className="mt-14 md:mt-0">{children}</div>{" "}
        </main>
      </div>
    );
  } else {
    return (
      <div className="mt-20">
        <div className="container m-auto">You need to Sign In</div>{" "}
      </div>
    );
  }
};

export default MyAccountLayout;
