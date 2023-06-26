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
      <main className=" m-auto container  w-full h-full ">{children}</main>
  );
};

export default BlogsLayout;
