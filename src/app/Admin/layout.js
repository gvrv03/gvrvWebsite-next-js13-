"use client";
import { DashNav } from "@/NavItem/TopNav";
import { useRouter } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }) => {
  const router = useRouter();

  //   if (!user) {
  //     return (
  //       <div className="w-full h-screen grid place-items-center">
  //         <div>
  //           <img src="" alt="" />
  //           <h1 className="text-red-800 font-semibold text-center">!</h1>
  //           <p>Login First</p>
  //         </div>
  //       </div>
  //     );
  //   }
  //   if (user.email != "itsgaurav3112003@gmail.com") {
  //     return (
  //       <div className="w-full h-screen grid place-items-center">
  //         <div>
  //           <img src="" alt="" />
  //           <h1 className="text-red-800 font-semibold text-center">Website</h1>
  //           <p>Under Construction</p>
  //         </div>
  //       </div>
  //     );
  //   }

  //   if (user && user.emailVerified) {
  return (
    
    <div className="mt-24  container m-auto">
      
      <div className="flex  flex-col md:flex-row mt-5 gap-5">
        <aside className=" p-5    border rounded-sm hidden md:grid w-full  md:w-3/12 place-items-start   bg-white">
          <div className="gap-2 flex flex-col">
            <button
              onClick={() => {
                router.push("/Admin/CreatePost");
              }}
              className="text-red-500 flex gap-5 items-center justify-center shadow-md border font-bold w-40 rounded-full py-3"
            >
              <i className="bi bi-plus-lg" />
              <p>New Post</p>
            </button>

            <div className="mt-5 gap-5 flex flex-col  ">
              {DashNav.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      router.push(item.location);
                    }}
                    className=" flex w-full gap-5 rounded-md text-left px-5  font-semibold "
                  >
                    <i className={`${item.icon} `} />
                    <p>{item.name} </p>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
        <div className="w-full ">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
  //   }
};

export default DashboardLayout;
