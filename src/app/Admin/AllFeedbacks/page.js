"use client";
import FeedbackTable from "@/Components/Table/FeedbackTable";
import { User } from "@/DataSet/DataSet";
import React from "react";

const AllFeedbacks = () => {
  return (
    <div>
      <div className=" font-semibold    rounded-sm      -b-2 p-2 bg-white flex justify-between ">
        <div>All Feedback ({User.length})</div>
        <div className="flex gap-5 justify-between items-center">
          <button>
            <i className="bi bi-arrow-clockwise text-lg" />{" "}
          </button>
          <button
            type="button"
            className="text-xs pBtn px-5 font-semibold rounded-sm py-2"
          >
            Add Feedback
          </button>
        </div>
      </div>

      <div className="mt-5">
        <FeedbackTable />
      </div>
    </div>
  );
};

export default AllFeedbacks;
