import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="loadingio-spinner-rolling-ya6n7x0lue">
      <div className="ldio-w62tp1ndyz8">
        <div></div>
      </div>
    </div>
  );
};

export const BtnSpinner = () => {
  return (
    <div className="loadingio-spinner-spinner-9vokdfybll  ">
      <div className="ldio-q5ahwqdlgxn">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const ApiLoader = () => {
  return (
    <div className="loadingio-spinner-ellipsis-bwn4ktor48q">
      <div className="ldio-drbvkqf2ixt">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const BtnSpinner2 = () => {
  return (
    <div className="loadingio-spinner-rolling-93tf0i2dza">
      <div className="ldio-dgenfq81oy5">
        <div></div>
      </div>
    </div>
  );
};

export const FullScreenLoader = () => {
  return (
    <div className=" fixed z-50 left-0 right-0 w-full h-screen top-0  p-2 mt-5 grid place-items-center">
      <div className="bg-white shadow-lg w-20 h-20 grid place-items-center">
        <LoadingSpinner />
      </div>{" "}
    </div>
  );
};

export const FullScreenLoaderMsg = () => {
  return (
    <div className=" fixed z-50 left-0 right-0 w-full h-screen top-0  p-2 mt-5 grid place-items-center">
      <div className="bg-white shadow-lg w-fit h-fit p-5 grid place-items-center">
        <LoadingSpinner />
        <label className="font-semibold">Uploading File</label>
      </div>{" "}
    </div>
  );
};
export default LoadingSpinner;
