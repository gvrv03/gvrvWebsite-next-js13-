import UserTable from "@/Components/Table/UserTable";
import { User } from "../../../DataSet/DataSet";
import React from "react";

const AllUsers = () => {
  return (
    <div>
      <div className=" font-semibold rounded-sm  border-b-2 p-2 bg-white flex justify-between ">
        <div>All User ({User.length})</div>
        <div className="flex gap-5 justify-between items-center">
          <button>
            <i className="bi bi-arrow-clockwise text-lg" />{" "}
          </button>
          <button
            type="button"
            className="text-xs pBtn px-5 font-semibold rounded-sm py-2"
          >
            Add User
          </button>
        </div>
      </div>

      <div className="mt-5">
        <UserTable />
      </div>
    </div>
  );
};

export default AllUsers;
