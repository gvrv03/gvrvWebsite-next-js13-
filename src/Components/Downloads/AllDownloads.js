import React from "react";
import DownloadsCard from "./DownloadsCard";

const AllDownloads = ({ data }) => {
  return (
    <>
      <div className=" grid grid-cols-2 md:grid-cols-6  gap-5 mt-5">
        {data?.map((item, index) => {
          return <DownloadsCard orderDetail={item} key={index} />;
        })}{" "}
      </div>
    </>
  );
};

export default AllDownloads;
