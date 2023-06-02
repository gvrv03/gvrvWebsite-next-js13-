import LoadingSpinner, { ApiLoader } from "@/Components/Spinner/LoadingSpinner";
import React from "react";

const loading = () => {
  return (
    <div
      className="grid bottom-0 place-items-center w-full h-90
     bg-white top-0 "
    >
      <LoadingSpinner />
    </div>
  );
};

export default loading;
