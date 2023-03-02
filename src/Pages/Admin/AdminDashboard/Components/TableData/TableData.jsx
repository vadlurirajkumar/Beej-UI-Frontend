import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import "./TableData.scss";

function createData(name, company, date, amount) {
  return { name, company, date, amount };
}
const rows = [
  createData("Norman Moss", "Air Garage", "10th Oct", "50,000"),
  createData("Norman Moss", "Air Garage", "10th Oct", "50,000"),
  createData("Norman Moss", "Air Garage", "10th Oct", "50,000"),
  createData("Norman Moss", "Air Garage", "10th Oct", "50,000"),
];

const TableData = () => {
  return (
    <div className="table">
      <h4>Transactions</h4>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="thead">Investor</TableCell>
              <TableCell align="center" className="thead">
                Startup
              </TableCell>
              <TableCell align="center" className="thead">
                Date & Time
              </TableCell>
              <TableCell align="center" className="thead">
                Amount Invested
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" className="table-cell">
                  {row.name}
                </TableCell>
                <TableCell align="center" className="table-cell">
                  {row.company}
                </TableCell>
                <TableCell align="center" className="table-cell">
                  {row.date}
                </TableCell>
                <TableCell align="center" className="table-cell">
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

export default TableData;
