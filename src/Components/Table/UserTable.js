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
import LoadingSpinner from "../Spinner/LoadingSpinner";

export default function UserTable({ Users }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const { error, isLoading } = Users;
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "90vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 800 }}>ID</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Image</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Name</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Email</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Phone Number</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Gender</TableCell>
              <TableCell style={{ fontWeight: 800 }}>Role</TableCell>
              <TableCell style={{ fontWeight: 800, textAlign: "center" }}>
                Edit/Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {error && (
              <TableRow>
                <TableCell colSpan={9}>Unexpected error occured !</TableCell>
              </TableRow>
            )}
            {Users.data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const {
                  userName,
                  firebaseID,
                  gender,
                  email,
                  phoneNo,
                  userProfile,
                  role,
                } = row;

                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell>{firebaseID}</TableCell>
                    <TableCell>
                      <img
                        className="w-7 h-7 rounded-full border-2 p-1 border-gray-400"
                        src={userProfile}
                        alt="G"
                      />
                    </TableCell>
                    <TableCell>{userName}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{phoneNo}</TableCell>
                    <TableCell>{gender}</TableCell>
                    <TableCell>{role}</TableCell>
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
