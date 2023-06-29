import React from "react";
const HeaderSearch = ({ searchParam, setvalue, value }) => {
  return (
    <div className="fixed top-14  border-b  left-0 right-0 bg-white ">
      <div className="container md:px-0 px-5 py-5 m-auto flex justify-between items-baseline">
        <div className="text-sm md:text-base font-semibold ">
          Showing result for : <span className="pColor">{searchParam}</span>
        </div>{" "}
        <div className="flex items-baseline md:gap-5 gap-2">
          <button
            onClick={() => {
              setvalue(1);
            }}
            className={`  ${
              value === 1 && "   rounded-full bg-red-500 px-1 text-white  "
            } items-baseline text-sm md:text-base  font-semibold flex gap-1`}
          >
            <i
              className={`uil-list-ui-alt uil text-sm md:text-base  ${
                value === 1 ? "text-white" : "pColor"
              } `}
            />
            <span className="md:block hidden">All</span> <span>(05)</span>
          </button>
          <button
            onClick={() => {
              setvalue(2);
            }}
            className={`  ${
              value === 2 && "   rounded-full bg-red-500 px-1 text-white  "
            } items-baseline text-sm md:text-base  font-semibold flex gap-1`}
          >
            <i
              className={`uil uil-notebooks text-sm md:text-base  ${
                value === 2 ? "text-white" : "pColor"
              }  `}
            />
            <span className="md:block hidden">Blog</span> <span>(05)</span>
          </button>{" "}
          <button
            onClick={() => {
              setvalue(3);
            }}
            className={`  ${
              value === 3 && "   rounded-full bg-red-500 px-1 text-white  "
            } items-baseline text-sm md:text-base  font-semibold flex gap-1`}
          >
            <i
              className={`uil uil-shopping-cart text-sm md:text-base  ${
                value === 3 ? "text-white" : "pColor"
              }  `}
            />
            <span className="md:block hidden">Product</span> <span>(05)</span>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
