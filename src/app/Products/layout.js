import React from "react";

const ProductLayout = ({ children }) => {
  const HeaderName = (props) => {
    return (
      <h2 className="font-bold text-lg relative">
        {props.name}
        <span className="w-16 -mb-2 pColor absolute left-0 bottom-0" />
      </h2>
    );
  };
  return <main className="  container m-auto  w-full ">{children}</main>;
};

export default ProductLayout;
