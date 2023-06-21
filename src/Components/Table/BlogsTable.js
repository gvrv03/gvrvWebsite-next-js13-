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

export default function BlogsTable({ blogs }) {
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
    <Paper className="mt-5" sx={{ width: "100%", overflow: "hidden" }}>
      <DeleteModal
        handleDelete={handleDelete}
        setforDelete={setforDelete}
        state={forDelete.state}
        id={forDelete.id}
      />
      <TableContainer sx={{ maxHeight: "75vh" }}>
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
            {blogs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((blog, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell className="text-center">{index + 1}</TableCell>

                    <TableCell className="text-center">
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
                    <TableCell className="text-center">
                      <IconButton aria-label="delete" size="small">
                        <CreateIcon fontSize="small" />
                      </IconButton>
                      <IconButton aria-label="delete" size="small">
                        <DeleteIcon
                          onClick={() => {
                            setforDelete({ state: "grid", id: blog._id });
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={blogs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
