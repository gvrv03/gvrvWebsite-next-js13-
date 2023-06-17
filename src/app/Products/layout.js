import React from "react";

const BlogsLayout = ({ children }) => {
  const HeaderName = (props) => {
    return (
      <h2 className="font-bold text-lg relative">
        {props.name}
        <span className="w-16 -mb-2 pColor absolute left-0 bottom-0" />
      </h2>
    );
  };
  return (
      <section className="  h-screen overflow-y-scroll  md:flex-row flex-col gap-5 flex">
        <main className="  w-full md:w-9/12  h-screen  ">{children}</main>
        <aside className="w-full md:w-1/4 bg-white  p-5 ">
          <div className=" ">
            <HeaderName name="Category" />
            <div className="mt-5 h-64 overflow-y-scroll flex flex-col gap-5">
             
            </div>
          </div>
        </aside>
      </section>
  );
};

export default BlogsLayout;
