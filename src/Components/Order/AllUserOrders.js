import React from "react";
import OrderCard from "./OrderCard";

const AllUserOrders = ({data}) => {

  return (
    <>
      <div className=" flex flex-col gap-5 mt-5">
        {data?.map((item, index) => {
          return <OrderCard  orderDetail={item}  key={index} />;
        })}{" "}
      </div>
    </>
  );
};

export default AllUserOrders;
