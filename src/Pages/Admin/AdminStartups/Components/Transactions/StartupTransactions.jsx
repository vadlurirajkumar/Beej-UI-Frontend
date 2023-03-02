import React from "react";
import logo from "../../../../../Assets/Brightline.png";
import pic from "../../../../../Assets/profile1.png";
import userpic from "../../../../../Assets/user.png";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

function createData(
  id,
  investorpic,
  name,
  img,
  refference,
  date,
  time,
  amount
) {
  return {
    id,
    investorpic,
    name,
    img,
    refference,
    date,
    time,
    amount,
  };
}

const rows = [
  createData(
    101,
    pic,
    "Vincent Carter",
    logo,
    "David",
    "12/10/2022",
    "9:30",
    "50,00,000"
  ),
  createData(
    102,
    userpic,
    "Vincent Carter",
    logo,
    "David",
    "12/10/2022",
    "9:30",
    "50,00,000"
  ),
  createData(
    103,
    pic,
    "Vincent Carter",
    logo,
    "David",
    "12/10/2022",
    "9:30",
    "50,00,000"
  ),
  createData(
    104,
    userpic,
    "Vincent Carter",
    logo,
    "David",
    "12/10/2022",
    "9:30",
    "50,00,000"
  ),
  createData(
    105,
    pic,
    "Vincent Carter",
    logo,
    "David",
    "12/10/2022",
    "9:30",
    "50,00,000"
  ),
  createData(
    106,
    pic,
    "Bhargavi",
    logo,
    "David",
    "12/10/2022",
    "9:30",
    "50,00,000"
  ),
  createData(
    107,
    pic,
    "Vincent Carter",
    logo,
    "David",
    "12/10/2022",
    "9:30",
    "50,00,000"
  ),
  createData(
    108,
    pic,
    "Vincent Carter",
    logo,
    "David",
    "12/10/2022",
    "9:30",
    "50,00,000"
  ),
];

const InvestorTransactions = () => {
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
                Transaction ID
              </TableCell>
              <TableCell align="center" className="tablehead">
                Investor Picture
              </TableCell>
              <TableCell align="center" className="tablehead">
                Investor Name
              </TableCell>
              <TableCell align="center" className="tablehead">
                Startup Name
              </TableCell>
              <TableCell align="center" className="tablehead">
                Refference Name
              </TableCell>
              <TableCell align="center" className="tablehead">
                Date
              </TableCell>
              <TableCell align="center" className="tablehead">
                Time
              </TableCell>
              <TableCell align="center" className="tablehead">
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" className="table-data">
                  {row.id}
                </TableCell>
                <TableCell align="center" className="table-data">
                  <img src={row.investorpic} alt="" className="profile-img"/>
                </TableCell>
                <TableCell align="center" className="table-data">
                  {row.name}
                </TableCell>
                <TableCell align="center" className="table-data">
                  <img src={row.img} alt="" className="company-img"/>
                </TableCell>
                <TableCell align="center" className="table-data">
                  {row.refference}
                </TableCell>
                <TableCell align="center" className="table-data">
                  {row.date}
                </TableCell>
                <TableCell align="center" className="table-data">
                  {row.time}
                </TableCell>
                <TableCell align="center" className="table-data">
                  {row.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InvestorTransactions;
