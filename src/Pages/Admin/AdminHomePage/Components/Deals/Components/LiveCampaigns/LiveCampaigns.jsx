import React from 'react'
import {
  TableContainer,
  Table, 
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import img1 from "../../../../../../../Assets/Brightline.png";
import { makeStyles } from "@material-ui/core/styles";

function createData(CompanyLogo, Name, Valuation, Target, Interested) {
  return {
    CompanyLogo,
    Name,
    Valuation,
    Target,
    Interested,
  };
}

const rows = [
  createData(img1, "Norman Moss", "20,00,000", "50,00,000", "30,00,000"),
  createData(img1, "Norman Moss", "20,00,000", "50,00,000", "30,00,000"),
  createData(img1, "Norman Moss", "20,00,000", "50,00,000", "30,00,000"),
  createData(img1, "Norman Moss", "20,00,000", "50,00,000", "30,00,000"),
  createData(img1, "Norman Moss", "20,00,000", "50,00,000", "30,00,000"),
  createData(img1, "Norman Moss", "20,00,000", "50,00,000", "30,00,000"),
];

const LiveCampaigns = () => {
  const useStyles = makeStyles({
    tableRow: {
      height: 60,
    },
  });
  const classes = useStyles();
  return (
    <div className="founderdetail investordetail">
      <TableContainer component={Paper} className="admin-table-container">
        <Table sx={{ minWidth: 680 }} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableRow}>
              <TableCell align="center" className="tablehead">Startup</TableCell>
              <TableCell align="center" className="tablehead"> Founder</TableCell>
              <TableCell align="center" className="tablehead">Valuation</TableCell>
              <TableCell align="center" className="tablehead">Target Amount</TableCell>
              <TableCell align="center" className="tablehead">Interested Amount</TableCell>
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
                  <img src={row.CompanyLogo} alt="" className="company-img"/>
                </TableCell>
                <TableCell align="center" className="table-data">{row.Name}</TableCell>
                <TableCell align="center" className="table-data">{row.Valuation}</TableCell>
                <TableCell align="center" className="table-data">{row.Target}</TableCell>
                <TableCell align="center" className="table-data">{row.Interested}</TableCell>
                <TableCell align="center" className="button-cell table-data">
                <div className="buttons" style={{paddingLeft:"25px"}}>
                  <select type="text" className="Button">
                    <option value="Edit">Close Deal</option>
                    <option value="Delete">Live Deal</option>
                  </select>
                </div>
              </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default LiveCampaigns