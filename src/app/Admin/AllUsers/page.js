"use client";
import UserTable from "@/Components/Table/UserTable";
import { User } from "../../../DataSet/DataSet";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/Store/Actions/userAction";
import LoadingSpinner, {
  FullScreenLoader,
} from "@/Components/Spinner/LoadingSpinner";
import { getAuth } from "firebase/auth";

const AllUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const Users = useSelector((state) => state.users);
  const { isLoading, data } = Users;

  // Firebase User

  const listAllUsers = (nextPageToken) => {
    // List batch of users, 1000 at a time.
    getAuth()
      .listUsers(1000, nextPageToken)
      .then((listUsersResult) => {
        listUsersResult.users.forEach((userRecord) => {
          console.log("user", userRecord.toJSON());
        });
        if (listUsersResult.pageToken) {
          // List next batch of users.
          listAllUsers(listUsersResult.pageToken);
        }
      })
      .catch((error) => {
        console.log("Error listing users:", error);
      });
  };
  return (
    <div>
      <div className=" font-semibold rounded-sm  border-b-2 p-2 bg-white flex justify-between ">
        <div>All User ({data.length})</div>
        <div className="flex gap-5 justify-between items-center">
          <button
            onClick={() => {
              // listAllUsers();
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
      {isLoading && <FullScreenLoader />}
      <div className="mt-5">
        <UserTable Users={Users} />
      </div>
    </div>
  );
};

export default AllUsers;
