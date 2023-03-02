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
import { useState, useEffect } from "react";
import user from "../../../../../Assets/profile1.png";
import company from "../../../../../Assets/airgaragelogo.png";
import "./PendingApprovals.scss";
import { makeStyles } from "@material-ui/core/styles";


function createData(
  Startup,
  ProfilePicture,
  Name,
  Phoneno,
  EmailID,

  City
) {
  return {
    Startup,
    ProfilePicture,
    Name,
    Phoneno,
    EmailID,

    City,
  };
}

const rows = [
  createData(
    company,
    user,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",

    "Mumbai"
  ),
  createData(
    company,
    user,
    "Bhargavi",
    9874563210,
    "norman@gmail.com",

    "Mumbai"
  ),
  createData(
    company,
    user,
    "Sireesha",
    9874563210,
    "norman@gmail.com",

    "Mumbai"
  ),
  createData(
    company,
    user,
    "Rajkumar",
    9874563210,
    "norman@gmail.com",

    "Mumbai"
  ),
  createData(
    company,
    user,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",

    "Mumbai"
  ),
  createData(
    company,
    user,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",

    "Mumbai"
  ),
  createData(
    company,
    user,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",

    "Mumbai"
  ),
  createData(
    company,
    user,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",

    "Mumbai"
  ),
];

const PendingApprovals = ({ search }) => {
  const useStyles = makeStyles({
    tableRow: {
      height: 60,
    },
  });
  const classes = useStyles();

  //FETCHING USER DATA:
  const [users, setUsers] = useState([]);
  useEffect(() => {
    createData();
  }, []);

  return (
    
      <div className="investordetail">
        <TableContainer component={Paper} className="admin-table-container">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow  sx={{
                borderBottom: "1px solid rgba(112, 112, 112, 0.2)",
              }}
              className={classes.tableRow}>
                <TableCell align="center" className="tablehead">Startup</TableCell>
                <TableCell align="center" className="tablehead">Profile Picture</TableCell>
                <TableCell align="center" className="tablehead"> Name</TableCell>
                <TableCell align="center" className="tablehead">Phone No</TableCell>
                <TableCell align="center" className="tablehead">Email ID</TableCell>

                <TableCell align="center" className="tablehead">City</TableCell>
                <TableCell align="center" className="tablehead"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .filter((val) => {
                  if (search === "") {
                    return val;
                  } else if (
                    val.Name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className="table-rows"
                  >
                    <TableCell align="center" className="table-data">
                      <img src={row.Startup} alt="" className="company-img"/>
                    </TableCell>
                    <TableCell align="center" className="table-data">
                      <img src={row.ProfilePicture} alt="" className="profile-img" />
                    </TableCell>
                    <TableCell align="center" className="table-data">{row.Name}</TableCell>
                    <TableCell align="center" className="table-data">{row.Phoneno}</TableCell>
                    <TableCell align="center" className="table-data">{row.EmailID}</TableCell>

                    <TableCell align="center" className="table-data">{row.City}</TableCell>
                    <TableCell align="center" className="button-cell table-data" >
                      <div className="buttons" style={{paddingLeft:"25px"}}>
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

export default PendingApprovals;
