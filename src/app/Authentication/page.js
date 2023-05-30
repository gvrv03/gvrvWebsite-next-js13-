"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DefButton } from "@/Components/UtilComponent";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useUserAuth } from "@/Context/UserAuthContext";

const SignIn = () => {
  const [phoneNo, setphoneNo] = useState("");
  const [uName, setUname] = useState("");
  const [gender, setgender] = useState("");
  const [otp, setOtp] = useState("");
  const [sendOTPCheck, setSendOtpCheck] = useState(false);

  const [requiredState, setRequired] = useState(true);
  const { verifyOTPServer, sendOTP, user } = useUserAuth();
  const [msg, setmsg] = useState("");
  const [loading, setloading] = useState(false);

  const router = useRouter();
  
  if (msg) {
    setTimeout(() => {
      setmsg("");
    }, 4000);
  }
  if (user) {
    router.push("/");
  }

  const sendOTPClient = async (e) => {
    e.preventDefault();
    setloading(true);
    if (phoneNo && uName && gender) {
      const res = await sendOTP(phoneNo);
      if (res) {
        setmsg(res.msg);
        setSendOtpCheck(true);
      } else {
        setmsg(res.error);
        setSendOtpCheck(false);
      }
      setSendOtpCheck(true);
      setloading(false);
      console.log(res);
    } else {
      setmsg("Fill all the fields");
      setloading(false);
    }
  };

  const verifyOTPClient = async (e) => {
    e.preventDefault();
    setloading(true);

    const res = await verifyOTPServer(parseInt(otp), uName, gender);
    if (res.msg) {
      setmsg(res.msg);
      setSendOtpCheck(false);
      setloading(false);
      router.push("/");
    } else {
      setmsg(res.error);
      setloading(false);
    }
  };
  return (
    <>
      <div className="w-full bg-white rounded-sm shadow-lg md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="px-5 space-y-4 md:space-y-6 pt-5 ">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center md:text-2xl ">
            Sign In
          </h1>
          {msg != "" && (
            <h3 className="bg-red-100 text-center py-2  font-bold text-red-700 ">
              {msg}
            </h3>
          )}

          <form className="space-y-4 md:space-y-6">
            <div>
              <div className="block mb-2 text-sm font-medium text-gray-900 ">
                Enter Name
              </div>
              <input
                type="text"
                required={requiredState}
                onChange={(e) => {
                  setUname(e.target.value);
                }}
                className=" text-gray-900 sm:text-sm rounded-sm h-10 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-50  outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                You are
              </label>
              <div className=" flex gap-5">
                <div className="flex justify-start gap-2 text-xs">
                  <input
                    type="radio"
                    required={requiredState}
                    onChange={(e) => {
                      setgender(e.target.value);
                    }}
                    name="gender"
                    value="Male"
                    className=" text-gray-900 sm:text-sm rounded-sm  outline-none block w-full p-2.5 bg-gray-100 "
                    placeholder="Your Name"
                  />
                  <span>Male</span>
                </div>
                <div className="flex justify-start gap-2 text-xs">
                  <input
                    type="radio"
                    required={requiredState}
                    onChange={(e) => {
                      setgender(e.target.value);
                    }}
                    name="gender"
                    value="Female"
                    className=" text-gray-900 sm:text-sm rounded-sm  outline-none block w-full p-2.5 bg-gray-100 "
                    placeholder="Your Name"
                  />
                  <span>Female</span>
                </div>
              </div>
            </div>

            <div>
              <div className="block mb-2 text-sm font-medium text-gray-900 ">
                Enter phone number
              </div>
              <PhoneInput
                country={"in"}
                required={requiredState}
                value={phoneNo}
                onChange={setphoneNo}
              />
            </div>
            {!sendOTPCheck && <div id="recaptcha-container"></div>}
            {sendOTPCheck && (
              <div>
                <div className="block mb-2 text-sm font-medium text-gray-900 ">
                  Enter OTP
                </div>
                <input
                  type="number"
                  required={requiredState}
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                  id="otp"
                  name="otp"
                  className=" text-gray-900 sm:text-sm rounded-sm h-10 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-50  outline-none"
                />
              </div>
            )}

            {!sendOTPCheck ? (
              <DefButton
                loading={loading}
                func={sendOTPClient}
                name="Send OTP"
                btnStyle="text-white pBtn px-5 py-2 w-full"
              />
            ) : (
              <DefButton
                loading={loading}
                func={verifyOTPClient}
                name="Verify OTP"
                btnStyle="text-white pBtn px-5 py-2 w-full"
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
