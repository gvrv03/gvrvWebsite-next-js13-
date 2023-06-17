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

  const SingleBlogCard = () => {
    return (
      <div className="flex bg-gray-100  rounded-sm justify-start items-center gap-5 p-2">
        <span className="text-4xl text-slate-500 font-bold">01</span>
        <span>
          <h4 className="text-xs font-semibold">
            Using dangerouslySetInnerHTML in a React application
          </h4>
          <h6 className="text-xs mt-2 font-light">Python</h6>
        </span>
      </div>
    );
  };
  return (
    // <section className="     bg-red-800 h-90vh  md:flex-row flex-col gap-5 flex">
    //   <main className="  w-full md:w-9/12  h-full">{children}</main>
    //   <aside className="w-full md:w-1/4  h-fit bg-white  p-5 ">
    //     <div className=" ">
    //       <HeaderName name="Popular Post" />
    //       <div className="mt-5 h-64 overflow-y-scroll flex flex-col gap-5">
    //         <SingleBlogCard />
    //         <SingleBlogCard />
    //         <SingleBlogCard />
    //         <SingleBlogCard />
    //         <SingleBlogCard />
    //       </div>
    //     </div>

    //     <div className=" mt-10">
    //       <HeaderName name="Category" />
    //       <div className="mt-5 flex gap-2 justify-between items-center flex-wrap">
    //         <button className="bg-gray-100 hover:bg-gray-100 font-semibold rounded-sm px-5 py-1  ">
    //           Python
    //         </button>

    //         <button className="bg-gray-100 hover:bg-gray-100 font-semibold rounded-sm px-5 py-1  ">
    //           Cyber Security
    //         </button>

    //         <button className="bg-gray-100 hover:bg-gray-100 font-semibold rounded-sm px-5 py-1  ">
    //           Java
    //         </button>
    //         <button className="bg-gray-100 hover:bg-gray-100 font-semibold rounded-sm px-5 py-1  ">
    //           Cyber Security
    //         </button>
    //         <button className="bg-gray-100 hover:bg-gray-100 font-semibold rounded-sm px-5 py-1  ">
    //           Next js
    //         </button>
    //         <button className="bg-gray-100 hover:bg-gray-100 font-semibold rounded-sm px-5 py-1  ">
    //           React
    //         </button>
    //       </div>
    //     </div>
    //   </aside>
    // </section>

    <section className=" flex gap-5   ">
      <main className="  w-full  relative ">{children}</main>
    </section>
  );
};

export default BlogsLayout;
