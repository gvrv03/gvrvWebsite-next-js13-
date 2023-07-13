import React, { useState } from "react";
import { DefButton } from "./UtilComponent";

const DeleteModal = ({ setforDelete, state, id, handleDelete }) => {
  const [loading, setloading] = useState(false);
  const DeleteData = async () => {
    setloading(true);
    await handleDelete(id);
    setforDelete({ state: "hidden", id: "" });
    setloading(false);
  };
  return (
    <div
      className={`fixed w-full ${state}  h-screen left-0 z-50 top-0 bottom-0  place-items-center`}
    >
      <div className="bg-black opacity-50 h-screen left-0 right-0 top-0 absolute" />
      <div className="bg-white z-50 p-5 flex justify-center items-center flex-col gap-5">
        <i className="text-blue-500 text-8xl uil uil-info-circle" />
        <div className="font-semibold text-center ">
          Are you sure to delete!
        </div>
        <div className="flex  justify-center items-center gap-5">
          <button
            onClick={() => {
              setforDelete({ state: "hidden", id: "" });
            }}
            className="     px-10 py-2 rounded-sm"
          >
            Cancel
          </button>
          <DefButton
            loading={loading}
            func={DeleteData}
            name="Delete"
            btnStyle="bg-red-500 text-white px-10 py-2 rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
