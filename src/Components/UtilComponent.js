import { Button, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import LoopIcon from "@mui/icons-material/Loop";
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
      disabled={upload && true}
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

export const NoDataFound = ({ nameHead, location, btnTitle }) => {
  const router = useRouter();
  return (
    <div className=" text-center  h-80vh bg-white p-5 mt-5 grid  place-items-center">
      <div className="bg-white w-full md:w-fit flex flex-col justify-center items-center p-5 ">
        <img src="/NoData.svg" className="w-80" alt="" srcset="" />
        <h1 className="text-gray-400 mt-5">{nameHead}</h1>
        <Button
          variant="contained"
          onClick={() => {
            router.push(location);
          }}
          className="pBtn mt-5"
        >
          <i className="bi  bi-plus text-lg " />
          {btnTitle}
        </Button>
      </div>
    </div>
  );
};

export const AdminPageHeader = ({
  pageName,
  totalCount,
  refreshFun,
  routeLocation,
  btnName,
}) => {
  const router = useRouter();
  return (
    <div className=" font-semibold    rounded-sm   flex justify-between ">
      <div>
        {pageName} ({totalCount})
      </div>
      <div className="flex  justify-between items-center">
        <IconButton onClick={refreshFun} aria-label="LoopIcon" size="small">
          <LoopIcon className="text-2xl  " />
        </IconButton>
        <Button variant="text">Export</Button>
        <Button variant="text">Import</Button>
        <Button
          variant="contained"
          onClick={() => {
            router.push(routeLocation);
          }}
          className="pBtn"
        >
          <i className="bi bi-plus text-lg " />
          {btnName}
        </Button>
      </div>
    </div>
  );
};
