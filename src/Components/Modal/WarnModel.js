import { useAppStore } from "@/Context/UseStoreContext";
import React from "react";

const WarnModel = () => {
  const { rememberModal, setrememberModal } = useAppStore();
  return (
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      className={`${
        rememberModal ? "fixed" : "hidden"
      }  w-full h-screen grid place-items-center  z-50 `}
    >
      <div className="bg-black absolute w-full h-full  opacity-50" />
      {/* <!-- Modal content --> */}
      <div className=" md:relative absolute bg-white  transition-all delay-150 ease-linear  w-full md:w-[700px]  md:bottom-auto  bottom-0   rounded-t-lg md:rounded-lg shadow ">
        {/* <!-- Modal header --> */}
        <div className="flex items-start   justify-between p-4 border-b rounded-t">
          <h3 className="text-xl font-semibold text-gray-900 ">Remember</h3>
          <button
            type="button"
            onClick={() => {
              setrememberModal(false);
            }}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
            data-modal-hide="defaultModal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* <!-- Modal body --> */}
        <div className="p-6 space-y-6">
          <p className="text-base leading-relaxed text-justify text-gray-500 ">
            This website is currently in development mode and not yet in
            production. We are actively working behind the scenes to create and
            refine its features, design, and functionality. As a result, you may
            encounter occasional changes, updates, or even temporary disruptions
            during this development phase.
          </p>
          <p className="text-base text-justify leading-relaxed text-gray-500 ">
            We appreciate your patience and understanding as we strive to
            deliver an exceptional user experience. Rest assured, our team is
            dedicated to bringing you a fully functional and polished website in
            the near future. Thank you for visiting, and we look forward to
            unveiling the final product soon!
          </p>
        </div>
        {/* <!-- Modal footer --> */}
        <div className="p-6">
          <button
            data-modal-hide="defaultModal"
            onClick={() => {
              setrememberModal(false);
            }}
            type="button"
            className=" px-5 py-2  w-full md:w-auto rounded-md pBtn"
          >
            OK
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default WarnModel;
