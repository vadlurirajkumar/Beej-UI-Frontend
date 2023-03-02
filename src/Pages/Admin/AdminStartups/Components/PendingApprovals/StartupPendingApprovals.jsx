import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import img1 from "../../../../../Assets/Airtable_Logo.png";
import { makeStyles } from "@material-ui/core/styles";
import "./StartupPendingApprovals.scss";

function createData(SNo, Startup, StartupName, FounderName, category) {
  return {
    SNo,
    Startup,
    StartupName,
    FounderName,
    category,
  };
}

const rows = [
  createData(1, img1, "Assembly", "Sean Combs", "Services"),
  createData(2, img1, "Assembly", "Sean Combs", "Services"),
  createData(3, img1, "Assembly", "Sean Combs", "Services"),
  createData(
    4,
    img1,
    "Assembly",
    "Sean Combs",
    "Services"
  ),
  createData(
    5,
    img1,
    "Assembly",
    "Sean Combs",
    "Services"
  ),
  createData(
    6,
    img1,
    "Assembly",
    "Sean Combs",
    "Services"
  ),
  createData(
    7,
    img1,
    "Assembly",
    "Sean Combs",
    "Services"
  ),
  createData(
    8,
    img1,
    "Assembly",
    "Sean Combs",
    "Services"
  ),
];

const StartupPendingApprovals = () => {
  const useStyles = makeStyles({
    tableRow: {
      height: 60,
    },
  });
  const classes = useStyles();
  return (
    <div className="investordetail">
      <TableContainer component={Paper} className="admin-table-container">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell align="center" className="tablehead">
                S.No
              </TableCell>
              <TableCell align="center" className="tablehead">
                Startup
              </TableCell>
              <TableCell align="center" className="tablehead">
                Startup Name
              </TableCell>
              <TableCell align="center" className="tablehead">
                Founder Name
              </TableCell>
              <TableCell align="center" className="tablehead">
                Category
              </TableCell>
              <TableCell align="center" className="tablehead"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="table-rows"
              >
                <TableCell align="center" className="table-data">
                  {row.SNo}
                </TableCell>
                <TableCell align="center" className="table-data">
                  <img src={row.Startup} alt="" className="company-img" />
                </TableCell>
                <TableCell align="center" className="table-data">
                  {row.StartupName}
                </TableCell>
                <TableCell align="center" className="table-data">
                  {row.FounderName}
                </TableCell>
                <TableCell align="center" className="table-data">
                  {row.category}
                </TableCell>

                <TableCell align="left" className="button-cell table-data">
                  <div className="buttons">
                    <button className="accept-button">Accept</button>
                    <button className="decline-button">Decline</button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StartupPendingApprovals;
