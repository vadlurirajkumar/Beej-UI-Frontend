import "./InvestorDetails.scss";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import img1 from "../../../../../Assets/profile1.png";
import { makeStyles } from "@material-ui/core/styles";


function createData(
  SNo,
  ProfilePicture,
  Name,
  Phoneno,
  EmailID,
  TotalInvestment
) {
  return {
    SNo,
    ProfilePicture,
    Name,
    Phoneno,
    EmailID,
    TotalInvestment,
  };
}

const rows = [
  createData(
    1,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "50,00,000"
  ),
  createData(2, img1, "Bhargavi", 9874563210, "norman@gmail.com", "50,00,000"),
  createData(3, img1, "Sireesha", 9874563210, "norman@gmail.com", "50,00,000"),
  createData(4, img1, "Rajkumar", 9874563210, "norman@gmail.com", "50,00,000"),
  createData(
    5,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "50,00,000"
  ),
  createData(
    6,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "50,00,000"
  ),
  createData(
    7,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "50,00,000"
  ),
  createData(
    8,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "50,00,000"
  ),
];

const InvestorDetails = () => {
  const useStyles = makeStyles({
    tableRow: {
     height:60
    },
  });
  const classes = useStyles();
  //SEARCHING USER STATE:
  const [search, setSearch] = useState("");

  //FETCHING USER DATA:
  const [users, setUsers] = useState([]);
  useEffect(() => {
    createData();
  }, []);

  return (
    <div className="investordetail">
      <div className="search-input">
        <input
          type="search"
          placeholder="Search with name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="icon" />
      </div>
      <div className="investorTable">
        <TableContainer component={Paper} className="admin-table-container" >
          <Table aria-label="simple table" >
            <TableHead>
              <TableRow className={classes.tableRow}>
                <TableCell align="center" className="tablehead">
                  S.No
                </TableCell>
                <TableCell align="center" className="tablehead">
                  Profile Picture
                </TableCell>
                <TableCell align="center" className="tablehead">
                  {" "}
                  Name
                </TableCell>
                <TableCell align="center" className="tablehead">
                  Phone No
                </TableCell>
                <TableCell align="center" className="tablehead">
                  Email ID
                </TableCell>
                <TableCell align="center" className="tablehead">
                  Total Investment
                </TableCell>
                <TableCell align="center" className="tablehead">
                
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
                    className={classes.tableRow}
                    
                  >
                    <TableCell align="center" className="table-data">
                      {row.SNo}
                    </TableCell>
                    <TableCell align="center" className="table-data ">
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
                      {row.Phoneno}
                    </TableCell>
                    <TableCell align="center" className="table-data">
                      {row.EmailID}
                    </TableCell>
                    <TableCell align="center" className="table-data">
                      {row.TotalInvestment}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="button-cell table-data"
                    >
                      <div className="action-buttons">
                        <button className="edit-button">Venture Partner</button>
                        <button className="edit-button">Edit</button>
                        <button className="edit-button">Inactive</button>
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

export default InvestorDetails;
