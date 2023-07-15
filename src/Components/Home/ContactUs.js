"use client";
import { AddContact } from "@/Store/Actions/contactAction";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { DefButton } from "../UtilComponent";
import HeaderName from "./HeaderName";

const ContactUs = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [userData, setuserData] = useState({});
  const onChange = (e) => {
    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setloading(true);
    const { payload } = await dispatch(AddContact(userData));

    if (payload.isSuccess) {
      toast.success(payload.message);
      setuserData({
        name: "",
        email: "",
        message: "",
        subject: "",
      });
      return setloading(false);
    }
    toast.error(payload.errorMsg);
    return setloading(false);
  };

  return (
    <div className="  m-auto">
      <HeaderName name="Contact Us" />
      <div className="    mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2  bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute  inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.86296739999999!3d18.52461645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680107453899!5m2!1sen!2sin"
          ></iframe>
          <div className="bg-white  relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <form className="lg:w-1/3 md:w-1/2 bg-white p-5  rounded-sm shadow-sm  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900  text-lg mb-1 text-center font-medium title-font">
            Contact Us
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm  text-gray-600">
              Name
            </label>
            <input
              type="text"
              value={userData.name ? userData.name : ""}
              onChange={onChange}
              name="name"
              required={true}
              className="w-full bg-slate-50   rounded-sm   focus:    -indigo-500 focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="subject"
              className="leading-7 text-sm  text-gray-600"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={userData.subject ? userData.subject : ""}
              onChange={onChange}
              name="subject"
              required={true}
              className="w-full bg-slate-50   rounded-sm   focus:    -indigo-500 focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7  text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={userData.email ? userData.email : ""}
              onChange={onChange}
              name="email"
              required={true}
              className="w-full bg-slate-50   rounded-sm   focus:    -indigo-500 focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7   text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              value={userData.message ? userData.message : ""}
              onChange={onChange}
              name="message"
              required={true}
              className="w-full bg-slate-50   rounded-sm   focus:    -indigo-500 focus:ring-2  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <DefButton
            name="Submit"
            func={submitForm}
            btnStyle="pBtn px-5 py-2 mt-5"
            loading={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
