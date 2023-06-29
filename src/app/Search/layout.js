import React from "react";
const CollectionLayout = ({ children }) => {
 
  return (
    <div className="flex m-auto flex-col md:flex-row container gap-5">
      <main className=" w-full h-full mt-[140px] ">{children}</main>
    </div>
  );
};

export default CollectionLayout;
