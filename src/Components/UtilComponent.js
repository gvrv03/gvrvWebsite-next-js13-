import { Button, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import LoopIcon from "@mui/icons-material/Loop";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DownloadTableExcel } from "react-export-table-to-excel";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import { BtnSpinner, BtnSpinner2 } from "./Spinner/LoadingSpinner";
import AddIcon from "@mui/icons-material/Add";

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
        <button
          onClick={() => {
            router.push(location);
          }}
          className="p-2 pBtn mt-5"
        >
          <i className="bi  bi-plus text-lg " />
          {btnTitle}
        </button>
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
  downloadData,
}) => {
  const router = useRouter();
  return (
    <div className=" font-semibold  flex-col w-full  rounded-sm  gap-2 border-b-2 pb-2  flex ">
      <div className="flex justify-between items-center">
        <div>
          {pageName} ({totalCount})
        </div>{" "}
        <div className="flex  justify-between gap-5 items-center">
          <div className="gap-2 flex">
            <input className="border w-20 p-2 text-xs outline-none" type="text" />
            <input className="border w-20 p-2 text-xs outline-none" type="text" />
          </div>{" "}
          <div className="gap-2 flex">
            <button className="p-2  bg-red-500 text-white text-xs rounded-sm flex gap-2 items-center   font-bold">
              <SearchIcon /> <span className="md:block hidden">FIND</span>
            </button>
            <button
              onClick={() => {
                router.push(routeLocation);
              }}
              className="pBtn text-xs  flex gap-2 items-center  p-2 rounded-sm"
            >
              <AddIcon /> <span className="md:block hidden">CREATE</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <button
            onClick={downloadData}
            className="text-xs md:text-sm  text-gray-500 "
          >
            Export
          </button>
          <button className="text-xs md:text-sm  text-gray-500 ">Import</button>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-xs md:text-sm text-gray-500">1 - 2 of 2</div>
          <IconButton onClick={refreshFun} aria-label="LoopIcon" size="small">
            <LoopIcon className="text-2xl  " />
          </IconButton>
          <div className=" flex">
            <IconButton>
              <NavigateBeforeIcon className="text-gray-500" size="small" />
            </IconButton>
            <IconButton>
              <NavigateNextIcon className="text-gray-500" size="small" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BackBtn = ({ backLocation, headName }) => {
  const router = useRouter();

  return (
    <h1 className="text-lg pb-5 font-bold">
      <IconButton
        onClick={() => {
          router.push(backLocation);
        }}
        aria-label="LoopIcon"
        size="small"
      >
        <ArrowBackIcon className="text-2xl  " />
      </IconButton>{" "}
      {headName}
    </h1>
  );
};
