import React from "react";

const TopNavBar = ({  navbar, toggleNav }) => {
  return (
    <div className="fixed top-16 z-50 block md:hidden border-b  left-0 right-0 bg-white ">
      <div className="container md:px-0 px-5 py-2  m-auto flex bg-white justify-between items-baseline">
        <button>
          <i className="uuil uil-estate pColor" />
        </button>{" "}
        <button onClick={toggleNav}>
          <i className="uil uil-draggabledots text-lg " />
        </button>
      </div>
    </div>
  );
};

export default TopNavBar;
