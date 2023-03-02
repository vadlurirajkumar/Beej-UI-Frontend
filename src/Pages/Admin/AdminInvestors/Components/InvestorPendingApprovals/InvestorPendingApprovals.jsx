import "./InvestorPendingApprovals.scss";
import img1 from "../../../../../Assets/profile1.png";
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
  SNo,
  ProfilePicture,
  Name,
  Phoneno,
  EmailID,
  Investmentallocated,
  City,
  Refferal
) {
  return {
    SNo,
    ProfilePicture,
    Name,
    Phoneno,
    EmailID,
    Investmentallocated,
    City,
    Refferal
  };
}

const rows = [
  createData(
    1,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "50,00,000",
    "Mumbai",
    "John"
  ),
  createData(
    2,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "50,00,000",
    "Mumbai",
    "Danial"
  ),
  createData(
    3,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "50,00,000",
    "Mumbai",
    "David"
  ),
  createData(
    4,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "50,00,000",
    "Mumbai",
    "John"
  ),
  createData(
    5,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "50,00,000",
    "Mumbai",
    "David"
  ),
  createData(
    6,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "50,00,000",
    "Mumbai",
    "John"
  ),
  createData(
    7,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "50,00,000",
    "Mumbai",
    "John"
  ),
  createData(
    8,
    img1,
    "Norman Moss",
    9874563210,
    "norman@gmail.com",
    "50,00,000",
    "Mumbai",
    "John"
  ),
];

const InvestorPendingApprovals = () => {
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
            <TableRow
              sx={{
                borderBottom: "1px solid rgba(112, 112, 112, 0.2)",
              }}
              className={classes.tableRow}
            >
              <TableCell align="center" className="tablehead">
                SNo.
              </TableCell>
              <TableCell align="center" className="tablehead">
                Profile Picture
              </TableCell>
              <TableCell align="center" className="tablehead">
                Name
              </TableCell>
              <TableCell align="center" className="tablehead">
                Phone no.
              </TableCell>
              <TableCell align="center" className="tablehead">
                Email ID
              </TableCell>
              <TableCell align="center" className="tablehead">
                Investment allocated
              </TableCell>
              <TableCell align="center" className="tablehead">
                City
              </TableCell>
              <TableCell align="center" className="tablehead">
                Refferal Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ borderBottom: "1px solid rgba(112, 112, 112, 0.2)" }}
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
                  {row.Phoneno}
                </TableCell>
                <TableCell align="center" className="table-data">
                  {row.EmailID}
                </TableCell>
                <TableCell align="center" className="table-data">
                  {row.Investmentallocated}
                </TableCell>
                <TableCell align="center" className="table-data">
                  {row.City}
                </TableCell>
                <TableCell align="center" className="table-data">
                  {row.Refferal}
                </TableCell>
                <TableCell  align="center" className="button-cell table-data">
                  <div className="buttons" >
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

export default InvestorPendingApprovals;
