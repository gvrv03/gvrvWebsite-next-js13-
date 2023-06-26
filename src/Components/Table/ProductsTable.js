"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useUserAuth } from "@/Context/UserAuthContext";
import DeleteModal from "../DeleteModal";
import { useState } from "react";
import { DeleteBlog } from "@/Store/Actions/blogAction";
import CreateIcon from "@mui/icons-material/Create";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductsTable({ products, count }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { userIDS } = useUserAuth();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [forDelete, setforDelete] = useState({ state: "hidden", id: "" });
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    const { payload } = await dispatch(
      DeleteBlog({ id: id, token: userIDS.ID })
    );
    console.log(payload);
    if (payload.isSuccess) {
      toast.success(payload.message);
    } else {
      toast.error(payload.error);
    }
  };

  return (
    <div className="w-full bg-white mt-5 p-5 overflow-scroll">
      <table class=" text-sm text-left w-full text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" class="px-6 py-3">
              Title
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Type
            </th>
            <th scope="col" class="px-6 py-3">
              Author
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Edit/Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            const {
              title,
              thumbnail,
              pricing,
              productOrganization,
              addeBy,
              _id,
            } = product ? product : {};
            const { price } = pricing ? pricing : {};

            const { category, type, vendor, collection, keywords } =
              productOrganization ? productOrganization : {};

            return (
              <tr class="bg-white border-b  " key={index}>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 gap-2 flex items-center whitespace-nowrap "
                >
                  <div className=" rounded-full border-2 w-10 border-gray-200">
                    <img src={thumbnail} className="w-full " alt="" />
                  </div>
                  <span>{title}</span>{" "}
                </th>
                <td class="px-6 py-4">{category}</td>
                <td class="px-6 py-4">{type}</td>
                <td class="px-6 py-4">{addeBy}</td>
                <td class="px-6 py-4">₹{price}</td>
                <td class="px-6 py-4">
                  <IconButton aria-label="delete" size="small">
                    <CreateIcon fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="delete" size="small">
                    <DeleteIcon
                      onClick={() => {
                        setforDelete({ state: "grid", id: _id });
                      }}
                      fontSize="small"
                    />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
