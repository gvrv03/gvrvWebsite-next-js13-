import ContactUsTable from "@/Components/Table/ContactUsTable";
import { User } from "@/DataSet/DataSet";

import React from "react";

const AllContactUs = () => {
  return (
    <div>
      <div className=" font-semibold    rounded-sm  border-b-2 p-2 bg-white   flex justify-between ">
        <div>All Contacts ({User.length})</div>
        <div className="flex gap-5 justify-between items-center">
          <button>
            <i className="bi bi-arrow-clockwise text-lg" />{" "}
          </button>
          <button
            type="button"
            className="text-xs pBtn px-5 font-semibold rounded-sm py-2"
          >
            Add Contact Us
          </button>
        </div>
      </div>

      <div className="mt-5">
        <ContactUsTable />
      </div>
    </div>
  );
};

export default AllContactUs;
