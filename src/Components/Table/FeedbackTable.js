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

export default function FeedbackTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const Context = useUserAuth();
  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "90vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 800 }}>Sr. No.</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Image</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Name</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Email</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Feedback</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Gender</TableCell>
              <TableCell style={{ fontWeight: 800, textAlign: "center" }}>
                Edit/Phone/Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {User.slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            ).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <img
                      className="w-7 h-7 rounded-full border-2 p-1 border-gray-400"
                      src={Context.user && Context.user.photoURL}
                      alt=""
                    />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>Here Feedback</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>
                    <div className="w-full flex justify-center gap-5 items-center">
                      <button>
                        <i className="uil uil-edit text-xl  text-blue-600" />
                      </button>
                      <button>
                        <i className="uil uil-phone text-xl  " />
                      </button>
                      <button>
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
