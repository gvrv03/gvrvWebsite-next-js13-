import LoadingSpinner, { ApiLoader } from "@/Components/Spinner/LoadingSpinner";
import React from "react";

const loading = () => {
  return (
    <div className="grid place-items-center w-full h-screen bg-white top-0">
      <ApiLoader/>
    </div>
  );
};

export default loading;
