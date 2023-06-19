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
import { User } from "@/DataSet/DataSet";
import { useUserAuth } from "@/Context/UserAuthContext";
import DeleteModal from "../DeleteModal";
import { useState } from "react";
import { DeleteBlog } from "@/Store/Actions/blogAction";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export default function BlogsTable({ blogs }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const Context = useUserAuth();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  console.log(blogs);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [forDelete, setforDelete] = useState({ state: "hidden", id: "" });
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    const { payload } = await dispatch(DeleteBlog(id));
    console.log(payload);
    if (payload.isSuccess) {
      toast.success(payload.message);
    }
  };

  return (
    <Paper className="mt-5" sx={{ width: "100%", overflow: "hidden" }}>
      <DeleteModal
        handleDelete={handleDelete}
        setforDelete={setforDelete}
        state={forDelete.state}
        id={forDelete.id}
      />
      <TableContainer sx={{ maxHeight: "90vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 800 }}>Sr. No.</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Image</TableCell>
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
            {blogs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((blog, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell>{index + 1}</TableCell>

                    <TableCell>
                      <img
                        src={blog.image}
                        className="rounded-full border-2 border-gray-400 w-10 h-10"
                        alt=""
                        srcset=""
                      />
                    </TableCell>
                    <TableCell>{blog.title}</TableCell>
                    <TableCell>{blog.category}</TableCell>
                    <TableCell>{blog.createdAt}</TableCell>
                    <TableCell>{blog.author}</TableCell>
                    <TableCell>
                      <div className="w-full flex justify-center gap-5 items-center">
                        <button>
                          <i className="uil uil-edit text-xl  text-blue-600" />
                        </button>
                        <button
                          onClick={() => {
                            setforDelete({ state: "grid", id: blog._id });
                          }}
                        >
                          <i className="uil uil-trash-alt text-red-600 text-xl " />
                        </button>
                      </div>
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
        count={User.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
