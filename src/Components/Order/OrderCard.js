import moment from "moment";
import React from "react";
import PendingPaymentInititate from "../Payment/PendingPaymentInititate";

const OrderCard = ({ orderDetail }) => {
  return (
    <div className="bg-white flex-col md:flex-row  justify-between  flex gap-10  p-5">
      <div className="  w-full  items-center flex justify-between  gap-5 ">
        <div className="border p-2 border-gray-400  rounded-full overflow-hidden">
          <img
            src={orderDetail?.Product?.thumbnail}
            alt={orderDetail?.Product?.title}
            className="w-10 h-10 "
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold">{orderDetail?.Product?.title}</h4>
          <h5 className=" text-xs  text-gray-500 ">
            Category: {orderDetail?.Product?.productOrganization?.category}
          </h5>
          <div className="text-xs" >  {moment(orderDetail?.createdAt).format("DD-MM-YYYY")}</div>
        </div>
        <div>
          <h4 className="text-center font-semibold ">
            {" "}
            ₹ {orderDetail?.Product?.pricing?.price}
          </h4>
        </div>

        <div className="flex gap-2 items-center ">
          <span className="bg-red-500 h-2 w-2 p-1 rounded-full" />
          <span>{orderDetail?.status === "paid" ? "Complete" : "Pending"}</span>
        </div>
      </div>

      <div className="flex justify-between  w-full gap-5 flex-col md:flex-row  items-center">
        <div className="flex   md:flex-col justify-between  w-full md:gap-1   gap-5">
          <span className="text-xs   md:text-sm text-gray-500">
            Order ID : {orderDetail?.id}
          </span>
          <span className="text-xs   md:text-sm text-gray-500">
            Payment ID :{orderDetail?.razorpay_payment_id}
          </span>
        </div>
        {orderDetail?.status === "paid" ? (
          <button className=" w-full py-2 px-5 pBtn">Download Receipt</button>
        ) : (
          <PendingPaymentInititate
            amount={orderDetail?.Product?.pricing?.price}
            produDID={orderDetail?.Product?.productID}
            title={orderDetail?.Product?.title}
            rzpOrderID={orderDetail?.id}
          />
        )}
        {/* <button>Download</button> */}
      </div>
    </div>
  );
};

export default OrderCard;
