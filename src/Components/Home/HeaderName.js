import React from "react";

const HeaderName = (props) => {
  return (
    <div className="my-10 mt-20 grid place-items-center">
      <h2 className=" text-4xl font-bold">{props.name}</h2>
      <div className="h-1 w-16 bg-red-600 rounded mt-5"></div>
    </div>
  );
};

export default HeaderName;
