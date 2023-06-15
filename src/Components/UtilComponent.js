import React from "react";
import { BtnSpinner, BtnSpinner2 } from "./Spinner/LoadingSpinner";

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

export const UploadButton = ({ upload, uploadFile, loading, btnStyle }) => {
  return (
    <button
      onClick={!upload && uploadFile}
      disabled={upload && true }
      className={`${btnStyle} grid place-items-center`}
    >
      {loading ? (
        <BtnSpinner2 />
      ) : (
        <div className="flex gap-1">
          {upload && <i className="bi bi-arrow-up-right-circle-fill"></i>}
          <span className="px-5 text-sm ">
            {upload ? "Uploaded" : "Upload"}
          </span>
        </div>
      )}
    </button>
  );
};
