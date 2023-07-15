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

import DeleteModal from "../DeleteModal";
import { useState } from "react";
import { DeleteBlog, fetchBlogs } from "@/Store/Actions/blogAction";
import CreateIcon from "@mui/icons-material/Create";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment/moment";
import { useUserNextAuth } from "@/Context/useNextAuthContext";
import { DeleteContact, fetchContacts } from "@/Store/Actions/contactAction";

export default function ContactUsTable({ contact, count }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { userIDS } = useUserNextAuth();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    dispatch(
      fetchContacts({
        queryObj: {},
        page: newPage + 1,
        limit: rowsPerPage,
      })
    );
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    dispatch(
      fetchContacts({
        queryObj: {},
        page: page + 1,
        limit: event.target.value,
      })
    );
  };

  const [forDelete, setforDelete] = useState({ state: "hidden", id: "" });

  const handleDelete = async (id) => {
    const { payload } = await dispatch(
      DeleteContact({ id: id, token: userIDS.ID })
    );
    console.log(payload);
    if (payload.isSuccess) {
      toast.success(payload.message);
    } else {
      toast.error(payload.error);
    }
  };

  return (
    <Paper className="mt-5      " sx={{ width: "100%", overflow: "hidden" }}>
      <DeleteModal
        handleDelete={handleDelete}
        setforDelete={setforDelete}
        state={forDelete.state}
        id={forDelete.id}
      />
      <TableContainer sx={{ minHeight: "67vh", maxHeight: "67vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell className="text-center" style={{ fontWeight: 800 }}>
                Sr. No.
              </TableCell>
              <TableCell style={{ fontWeight: 800 }}>Name</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Email</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Subject</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Message</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Created At</TableCell>
              <TableCell style={{ fontWeight: 800, textAlign: "center" }}>
                Edit/Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contact?.map((contact, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell className="text-center">{index + 1}</TableCell>

                  <TableCell>{contact?.name}</TableCell>
                  <TableCell>{contact?.email}</TableCell>
                  <TableCell>{contact?.subject}</TableCell>
                  <TableCell>{contact?.message}</TableCell>
                  <TableCell>
                    {moment(contact?.createdAt).format("DD-MM-YYYY")}
                  </TableCell>
                  <TableCell className="text-center">
                    {/* <IconButton aria-label="delete" size="small">
                        <CreateIcon fontSize="small" />
                      </IconButton> */}
                    <IconButton
                      onClick={() => {
                        setforDelete({ state: "grid", id: contact?._id });
                      }}
                      aria-label="delete"
                      size="small"
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
