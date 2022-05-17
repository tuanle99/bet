import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Checkbox,
} from "@mui/material";

const columns = [
  { id: "person1", label: "Person 1", minWidth: 100 },
  { id: "person2", label: "Person 2", minWidth: 100 },
  {
    id: "condition",
    label: "Condition",
    minWidth: 200,
  },
  {
    id: "reward",
    label: "Reward",
    minWidth: 150,
  },
  {
    id: "addition",
    label: "Special Condition",
    minWidth: 200,
  },
  {
    id: "complete",
    label: "Complete",
    minWidth: 100,
  },
];

function createData(id, person1, person2, condition, reward, addition) {
  return { id, person1, person2, condition, reward, addition };
}

const rows = [
  createData(
    "1",
    "me",
    "you",
    "me got GSW, you got Mav",
    "1 boba",
    "no addition content"
  ),
  createData(
    "2",
    "me",
    "you",
    "me got GSW, you got Mav",
    "1 boba",
    "no addition content"
  ),
];

function CurrentBetComp() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={"center"}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={"center"}>
                          {column.id !== "complete" ? value : <Checkbox />}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default CurrentBetComp;
