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
  return (
    <section className=" mt-20 m-auto  p-5 container">
        <main className="  w-full ">{children}</main>
    </section>
  );
};

export default ProductLayout;
