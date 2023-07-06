"use client";
import UserTable from "@/Components/Table/UserTable";
import { User } from "@/DataSet/DataSet";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/Store/Actions/userAction";
import LoadingSpinner, {
  FullScreenLoader,
} from "@/Components/Spinner/LoadingSpinner";
import { getAuth } from "firebase/auth";
import { Button } from "@mui/material";
import { AdminPageHeader } from "@/Components/UtilComponent";
 

const AllUsers = () => {
  const dispatch = useDispatch();
  const { userIDS } = useUserAuth();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const Users = useSelector((state) => state.users);
  const { isLoading, data } = Users;

  return (
    <div>
      <AdminPageHeader
        pageName="All Users"
        totalCount={data.length}
        refreshFun={async () => {
          await dispatch(fetchUsers(userIDS.ID));
        }}
        routeLocation="/Admin/CreatePost"
        btnName="Add User"
      />

      {isLoading && <FullScreenLoader />}
      <div className="mt-5">
        <UserTable Users={Users} />
      </div>
    </div>
  );
};

export default AllUsers;
