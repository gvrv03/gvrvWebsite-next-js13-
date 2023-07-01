"use client";
import { UserAccountNav } from "@/NavItem/TopNav";
import { useRouter } from "next/navigation";
import React from "react";

const MyAccountLayout = ({ children }) => {
  const router = useRouter();
  return (
    <div className=" container m-auto mt-20  relative justify-between flex gap-5 ">
      <aside className="  md:w-[15%] md:fixed h-[85vh] hidden md:flex bg-white   p-5  flex-col gap-5 items-start border shadow-md ">
        {UserAccountNav.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                router.push(item.location);
              }}
              className="flex gap-2"
            >
              <i className={`${item.icon}`} />
              <h1>{item.name}</h1>{" "}
            </button>
          );
        })}
      </aside>
      <main className=" w-full md:w-4/5 absolute right-0 text-justify">
        {children}
      </main>
    </div>
  );
};

export default MyAccountLayout;
