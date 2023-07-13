import { Divider } from "@mui/material";
import React from "react";

const Pricing = ({
  setprice,
  setcompareprice,
  setcostPerItem,
  setprofit,
  setmargin,
  margin,
  profit,
  price
}) => {
  return (
    <div className="p-5      bg-white">
      <label className="font-semibold text-gray-500">Pricing</label>
      <div className="flex mt-5 gap-5 flex-col md:flex-row">
        <div className="flex flex-col gap-2 text-sm text-gray-500">
          <label>Price</label>
          <div className="     px-2">
            ₹
            <input
              onChange={(e) => {
                setprice(e.target.value);
              }}
              className=" rounded-sm px-2 py-2 outline-none"
              type="number"
              placeholder="0.00"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm text-gray-500">
          <label>Compare-at price</label>
          <div className="     px-2">
            ₹
            <input
              onChange={(e) => {
                setcompareprice(e.target.value);
              }}
              className=" rounded-sm px-2 py-2 outline-none"
              type="number"
              placeholder="0.00"
            />
          </div>
        </div>
      </div>
      <Divider className="py-2" />
      <div className="flex flex-col md:flex-row  flex-wrap gap-5">
        <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
          <label>Cost per item</label>
          <div className="     px-2">
            ₹
            <input
              onChange={(e) => {
                setcostPerItem(e.target.value);
                setprofit(price - e.target.value);
                setmargin(100 - (e.target.value / price) * 100);
              }}
              className=" rounded-sm px-2 py-2 outline-none"
              type="number"
              placeholder="0.00"
            />
          </div>
        </div>
        <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
          <label>Profit</label>
          <div className="     px-2 bg-gray-100">
            ₹
            <input
              value={profit}
              readOnly={true}
              className=" rounded-sm bg-gray-100 px-2 py-2 outline-none"
              type="number"
              placeholder="0.00"
            />
          </div>
        </div>
        <div className="flex mt-5 flex-col gap-2 text-sm text-gray-500">
          <label>Margin</label>
          <div className="     px-2 bg-gray-100">
            <input
              value={margin}
              readOnly={true}
              className=" rounded-sm bg-gray-100 px-2 py-2 outline-none"
              type="number"
              placeholder="0.00"
            />
            %
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
