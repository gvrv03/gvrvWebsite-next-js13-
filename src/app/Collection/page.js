import React from "react";

const page = () => {
  return (
    <div className="container m-auto">

      <div className="flex gap-5 ">
        <button className="border rounded-full px-5 py-1">All</button>
        <button className="border rounded-full px-5 py-1">Product</button>
        <button className="border rounded-full px-5 py-1">Blog</button>
      </div>
    </div>
  );
};

export default page;
