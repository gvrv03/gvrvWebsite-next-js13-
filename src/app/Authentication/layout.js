"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { DefButton } from "@/Components/UtilComponent";
import { useUserAuth } from "@/Context/UserAuthContext";

const layout = ({ children }) => {
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
    <>
      <div className="flex flex-col items-center  container justify-center  py-8 mx-auto h-screen lg:py-0">
        {children}
        <div className="w-full bg-white rounded-sm shadow-lg  grid place-items-center sm:max-w-md p-5  ">
          <h1 className=" text-2xl font-bold pb-5">OR</h1>

          <DefButton
            loading={loading}
            func={handleGoogleSignIn}
            name="Sign in with Google"
            btnStyle="text-white bg-blue-500 px-5 py-2 w-full"
          />
        </div>
      </div>
    </>
  );
};

export default layout;
