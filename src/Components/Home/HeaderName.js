import React from "react";

const HeaderName = (props) => {
  return (
    <div className=" pb-10 ">
      <h2 className=" text-2xl md:text-4xl font-bold">{props.name}</h2>
      <div className="h-1 w-16 bgpColor rounded mt-5"></div>
    </div>
  );
};

export default HeaderName;
