"use client";
import React, { useState } from "react";
import { DefButton } from "@/Components/UtilComponent";
import { useUserAuth } from "@/Context/UserAuthContext";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col items-center  justify-center  py-8 mx-auto  h-85s lg:py-0">
        {children}
        <GoogleSignIn />
      </div>
    </>
  );
};

const GoogleSignIn = () => {
  const { signWithGoogle } = useUserAuth();
  const [loading, setloading] = useState(false);

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      await signWithGoogle();
      setloading(false);
    } catch (error) {
      console.log(error.message);
      setloading(false);
    }
  };
  return (
    <div className="w-full bg-white rounded-sm shadow-lg  grid place-items-center sm:max-w-md p-5  ">
      <h1 className=" text-2xl font-bold pb-5">OR</h1>
      <DefButton
        loading={loading}
        func={handleGoogleSignIn}
        name="Sign in with Google"
        btnStyle="text-white bg-blue-500 px-5 py-2 w-full"
      />
    </div>
  );
};
export default Layout;
