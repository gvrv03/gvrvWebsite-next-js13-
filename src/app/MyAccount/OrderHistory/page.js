"use client";
import AllUserOrders from "@/Components/Order/AllUserOrders";
import { FullScreenLoader } from "@/Components/Spinner/LoadingSpinner";
import { NoDataFound } from "@/Components/UtilComponent";
import { fetchOrders } from "@/Store/Actions/orderAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const OrderHistory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchOrders({
        queryObj: { User: localStorage.getItem("id") },
        page: 1,
        limit: 1000,
      })
    );
  }, [dispatch]);

  // favourite
  const { data, error, isLoading, totatlPages } = useSelector(
    (state) => state.order
  );
  return (
    <div>
      My Order
      {error && (
        <div className="  p-5 mt-5">
          Unexpected error occured !{" "}
          <span className="p-1 text-center bg-red-200          -red-300">
            {error}
          </span>{" "}
        </div>
      )}
      {isLoading && <FullScreenLoader />}
      {!isLoading && data?.length === 0 ? (
        <NoDataFound
          nameHead="No Order Found"
          location="/Products"
          btnTitle="Buy Product"
        />
      ) : (
        <AllUserOrders data={data} />
      )}
    </div>
  );
};

export default OrderHistory;
