"use client";
import UserTable from "@/Components/Table/UserTable";
import { User } from "../../../DataSet/DataSet";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/Store/Actions/userAction";
import LoadingSpinner from "@/Components/Spinner/LoadingSpinner";

const AllUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const Users = useSelector((state) => state.users);
  const { isLoading, data } = Users;
  return (
    <div>
      <div className=" font-semibold rounded-sm  border-b-2 p-2 bg-white flex justify-between ">
        <div>All User ({data.length})</div>
        <div className="flex gap-5 justify-between items-center">
          <button
            onClick={() => {
              dispatch(fetchUsers());
            }}
          >
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
      {isLoading && (
        <div className=" relative z-30 w-full grid place-items-center  ">
          <LoadingSpinner />
        </div>
      )}
      <div className="mt-5">
        <UserTable Users={Users} />
      </div>
    </div>
  );
};

export default AllUsers;
