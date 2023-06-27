import React from "react";

const Pegination = ({ page, totalPages, setpage }) => {
  return (
    <div className="w-full mt-5 flex justify-between">
      <button
        disabled={page === 1 ? true : false}
        onClick={() => {
          setpage(page - 1);
        }}
        className="pBtn px-5 py-2 disabled:bg-red-300"
      >
        PREV
      </button>
      <button
        disabled={page === totalPages ? true : false}
        onClick={() => {
          setpage(page + 1);
        }}
        className="pBtn px-5 disabled:bg-red-300 py-2"
      >
        NEXT
      </button>
    </div>
  );
};

export default Pegination;
