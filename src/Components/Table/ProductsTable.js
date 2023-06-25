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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 800 }}>Title</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Category</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Type</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Author</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Price</TableCell>
              <TableCell style={{ fontWeight: 800, textAlign: "center" }}>
                Edit/Delete
              </TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
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
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" className=" flex gap-5 items-center" scope="row">
                  <div className=" rounded-full border-2 w-8 border-gray-200">
                    <img src={thumbnail} className="w-full " alt="" />
                  </div>
                  <span>{title}</span>{" "}
                </TableCell>
                <TableCell align="left">{category}</TableCell>
                <TableCell align="left">{type}</TableCell>
                <TableCell align="left">{addeBy}</TableCell>
                <TableCell align="left">₹{price}</TableCell>
                <TableCell align="left">
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
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
