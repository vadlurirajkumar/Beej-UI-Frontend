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
import { makeStyles } from "@material-ui/core/styles";
import img1 from "../../../../../Assets/profile1.png";
import "./FounderDetails.scss";

function createData(
  SNo,
  ProfilePicture,
  Name,
  Phoneno,
  EmailID,
  StartupName,
  City
) {
  return {
    SNo,
    ProfilePicture,
    Name,
    Phoneno,
    EmailID,
    StartupName,
    City,
  };
}

const rows = [
  createData(
    1,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "Airtable",
    "Mumbai"
  ),
  createData(
    2,
    img1,
    "Bhargavi",
    9874563210,
    "norman@gmail.com",
    "brightline",
    "Mumbai"
  ),
  createData(
    3,
    img1,
    "Sireesha",
    9874563210,
    "norman@gmail.com",
    "Airtable",
    "Mumbai"
  ),
  createData(
    4,
    img1,
    "Rajkumar",
    9874563210,
    "norman@gmail.com",
    "Airtable",
    "Mumbai"
  ),
  createData(
    5,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "Airtable",
    "Mumbai"
  ),
  createData(
    6,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "Airtable",
    "Mumbai"
  ),
  createData(
    7,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "Airtable",
    "Mumbai"
  ),
  createData(
    8,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "Airtable",
    "Mumbai"
  ),
];

const FounderDetails = ({ search }) => {
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
    <div className="founderdetail investordetail">
      <div className="investorTable">
        <TableContainer component={Paper} className="admin-table-container">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{
                  borderBottom: "1px solid rgba(112, 112, 112, 0.2)",
                }}
                className={classes.tableRow}
              >
                <TableCell align="center" className="tablehead">
                  S.No
                </TableCell>
                <TableCell align="center" className="tablehead">
                  Profile Picture
                </TableCell>
                <TableCell align="center" className="tablehead">
                  Name
                </TableCell>
                <TableCell align="center" className="tablehead">
                  Startup name
                </TableCell>
                <TableCell align="center" className="tablehead">
                  Phone No
                </TableCell>
                <TableCell align="center" className="tablehead">
                  Email ID
                </TableCell>

                <TableCell align="center" className="tablehead">
                  City
                </TableCell>
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
                      {row.SNo}
                    </TableCell>
                    <TableCell align="center" className="table-data">
                      <img
                        src={row.ProfilePicture}
                        alt=""
                        className="profile-img"
                      />
                    </TableCell>
                    <TableCell align="center" className="table-data">
                      {row.Name}
                    </TableCell>
                    <TableCell align="center" className="table-data">
                      {row.StartupName}
                    </TableCell>
                    <TableCell align="center" className="table-data">
                      {row.Phoneno}
                    </TableCell>
                    <TableCell align="center" className="table-data">
                      {row.EmailID}
                    </TableCell>

                    <TableCell align="center" className="table-data">
                      {row.City}
                    </TableCell>
                    <TableCell align="center" className="button-cell table-data">
                      <div className="buttons" style={{paddingLeft:"25px"}}>
                        <select type="text" className="Button">
                          <option value="Edit">Edit</option>
                          <option value="Delete">Delete</option>
                          <option value="Hide">Hide</option>
                        </select>
                        <select type="text" className="Button">
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default FounderDetails;
