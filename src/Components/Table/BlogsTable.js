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
import { DeleteBlog, fetchBlogs } from "@/Store/Actions/blogAction";
import CreateIcon from "@mui/icons-material/Create";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment/moment";

export default function BlogsTable({ blogs, count }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { userIDS } = useUserAuth();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    dispatch(
      fetchBlogs({
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
      fetchBlogs({
        queryObj: {},
        page: page + 1,
        limit: event.target.value,
      })
    );
  };

  const [forDelete, setforDelete] = useState({ state: "hidden", id: "" });

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
    <Paper className="mt-5 border " sx={{ width: "100%", overflow: "hidden" }}>
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
              <TableCell className="text-center" style={{ fontWeight: 800 }}>
                Image
              </TableCell>
              <TableCell style={{ fontWeight: 800 }}>Title</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Category</TableCell>
              <TableCell style={{ fontWeight: 800 }}>createdAt</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Author</TableCell>
              <TableCell style={{ fontWeight: 800, textAlign: "center" }}>
                Edit/Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs &&
              blogs.map((blog, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell className="text-center">{index + 1}</TableCell>

                    <TableCell sx={{ textAlign: "center" }}>
                      <img
                        src={blog.image}
                        className="rounded-full border-2 border-gray-400 w-10 h-10"
                        alt={blog.title}
                      />
                    </TableCell>
                    <TableCell>{blog.title}</TableCell>
                    <TableCell>{blog.category}</TableCell>
                    <TableCell>
                      {moment(blog.createdAt).format("DD-MM-YYYY")}
                    </TableCell>
                    <TableCell>{blog.author}</TableCell>
                    <TableCell className="text-center">
                      {/* <IconButton aria-label="delete" size="small">
                        <CreateIcon fontSize="small" />
                      </IconButton> */}
                      <IconButton
                        onClick={() => {
                          setforDelete({ state: "grid", id: blog._id });
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
