import React from "react";
import TextEditor from "../TextEditor";

const MainData = ({
  setDescription,
  settitle,
  artical,
  setartical,
}) => {
  return (
    <div className="p-5 border flex flex-col gap-5 bg-white">
      <div className="flex flex-col gap-2">
        <label>Title</label>
        <input
          onChange={(e) => {
            settitle(e.target.value);
          }}
          className="border rounded-sm px-2 py-2 outline-none"
          type="text"
        />
      </div>
      <div className="flex  flex-col gap-2">
        <label>Description</label>
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="border rounded-sm px-2 py-2 outline-none"
          type="text"
        />
      </div>
      <div className="flex flex-col  ">
        <label className="mb-5">Artical</label>
        <TextEditor setartical={setartical} artical={artical} />
      </div>
    </div>
  );
};

export default MainData;
