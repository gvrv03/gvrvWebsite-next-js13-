import React from "react";
import { BtnSpinner } from "./Spinner/LoadingSpinner";

export const DefButton = ({ name, func, btnStyle, loading }) => {
  return (
    <button
      onClick={func}
      disabled={loading ? true : false}
      className={`${btnStyle} grid place-items-center`}
    >
      {loading ? <BtnSpinner /> : name}
    </button>
  );
};
