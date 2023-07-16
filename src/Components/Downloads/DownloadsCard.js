"use client";
import { downloadProduct } from "@/Functions/downloadProduct";
import React, { useState } from "react";
import { DefButton } from "../UtilComponent";

const DownloadsCard = ({ orderDetail }) => {
  const [loading, setloading] = useState(false);
  const handleDownload = async () => {
    setloading(true);
    await downloadProduct(
      orderDetail?.Product?.productID,
      orderDetail?.Product?.title
    );
    setloading(false);
  };

  return (
    <div className="bg-white flex-col  justify-between  flex gap-2  p-2 ">
      <div className="border p-2 border-gray-200   overflow-hidden">
        <img
          src={orderDetail?.Product?.thumbnail}
          alt={orderDetail?.Product?.title}
          className="w-full"
        />
      </div>
      <div>
        <h4 className="font-semibold">{orderDetail?.Product?.title}</h4>
        <h5 className=" text-[10px]  text-gray-500 ">
          Category: {orderDetail?.Product?.productOrganization?.category}
        </h5>
      </div>
      <DefButton
        name="Download"
        loading={loading}
        func={() => {
          handleDownload();
        }}
        btnStyle="flex  w-full ml-auto  rounded-sm py-2 px-6 pBtn"
      />
    </div>
  );
};

export default DownloadsCard;
