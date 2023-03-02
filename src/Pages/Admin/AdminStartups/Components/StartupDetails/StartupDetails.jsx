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

function createData(
  SNo,
  Startup,
  FounderName,
LastRoundStage,
LatestValuation,
  Investmentraised
) {
  return {
    SNo,
    Startup,
    FounderName,
    LastRoundStage,
    LatestValuation,
    Investmentraised,
  };
}

const rows = [
  createData(1, img1,"John_deo", "Seed", "20,00,000","50,00,000"),
  createData(
    2,
    img1,
    "John_deo",
    "Pre-Seed",
     "20,00,000",
    "50,00,000"
  ),
  createData(
    3,
    img1,
    "John_deo",
    "Seed", "20,00,000",
    "50,00,000"
  ),
  createData(
    4,
    img1,
    "John_deo",
    "Seed", "20,00,000",
    "50,00,000"
  ),
  createData(
    5,
    img1,
    "John_deo",
    "Pre-Series A", "20,00,000",
    "50,00,000"
  ),
  createData(
    6,
    img1,
    "John_deo",
    "Seed", "20,00,000",
    "50,00,000",
    "Mumbai"
  ),
  createData(
    7,
    img1,
    "John_deo",
    "Pre-Series A", "20,00,000",
    "50,00,000"
  ),
  createData(
    8,
    img1,
    "John_deo",
    "Pre-Series A", "20,00,000",
    "50,00,000"
  ),
];

const StartupDetails = () => {
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
                  Founder name
                </TableCell>
                <TableCell align="center" className="tablehead">
                Last Round Stage
                </TableCell>
                <TableCell align="center" className="tablehead">
                Latest Valuation
                </TableCell>

                <TableCell align="center" className="tablehead">
                  Investment Raised
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
                    {row.FounderName}
                  </TableCell>
                  <TableCell align="center" className="table-data">
                    {row. LastRoundStage}
                  </TableCell>
                  <TableCell align="center" className="table-data">
                    {row.LatestValuation}
                  </TableCell>
                  <TableCell align="center" className="table-data">
                    {row.Investmentraised}
                  </TableCell>

                  <TableCell align="center" className="button-cell table-data">
                    <div className="buttons">
                      <button className="accept-button">Edit</button>
                      <button className="decline-button">Inactive</button>
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

export default StartupDetails;
