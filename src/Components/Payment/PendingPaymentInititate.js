"use client";
import axios from "axios";
import { toast } from "react-hot-toast";
import React, { useState } from "react";
import { createOrderURL } from "../../../allLinks";
import { DefButton } from "../UtilComponent";
import { downloadProduct } from "@/Functions/downloadProduct";

import { useUserNextAuth } from "@/Context/useNextAuthContext";
import { fetchOrders } from "@/Store/Actions/orderAction";
import { useDispatch } from "react-redux";

const PendingPaymentInititate = ({ amount, produDID, title, rzpOrderID }) => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const { userIDS, isLogin } = useUserNextAuth();
  //PAyemnt Integration
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setloading(true);
    if (!isLogin) {
      setloading(false);
      return toast.error("You need to Login");
    }

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      setloading(false);

      return toast.error("Razorpay SDK failed to load");
    }

    //Redirection
    if (!rzpOrderID) {
      setloading(false);
      return toast.error("Server Error, Are you online!");
    } else {
      const __DEV__ = document.domain === "localhost";
      let option = {
        key: "rzp_test_KNouXSjozBeQpO", // Replace with your Razorpay API key
        amount: amount * 100, // Payment amount in paise or smallest currency unit
        currency: "INR", // Currency code
        name: "GVRV Store", // Payment recipient name
        description: title, // Payment description
        image: "/gaurav.svgg", // URL of your store's logo
        order_id: rzpOrderID, // Unique order ID generated on the server-side
        handler: async (response) => {
          await postPayment(response);
        },
        // prefill: {
        //   name: "Gaurav Narnaware", // Customer name
        //   email: "gauravnarnaware3112003@gmail.com", // Customer email
        //   //   contact: "7796305801", // Customer contact number
        // },
        notes: {
          address: "At, Ghatanji",
        },
        theme: {
          color: "#00176b",
        },
      };
      let paymentOBJ = new window.Razorpay(option);
      setloading(false);
      paymentOBJ.open();
    }
  };

  const postPayment = async (response) => {
    console.log(response);
    setloading(true);
    if (response.razorpay_payment_id) {
      await axios.post("/api/PaymentGateway/GetOrder", {
        OID: response.razorpay_order_id,
        verifier: response,
      });
      await downloadProduct(produDID, title);
      setloading(false);
      toast.success("Payment Success");

      dispatch(
        fetchOrders({
          queryObj: { User: userIDS.ID },
          page: 1,
          limit: 1000,
        })
      );
    } else {
      setloading(false);
      return toast.error("Payment unsuccessful");
    }
  };

  return (
    <DefButton
      name="Complete Payment"
      loading={loading}
      func={() => {
        handlePayment();
      }}
      btnStyle="flex  w-full ml-auto  rounded-sm py-2 px-6 pBtn"
    />
  );
};

export default PendingPaymentInititate;
