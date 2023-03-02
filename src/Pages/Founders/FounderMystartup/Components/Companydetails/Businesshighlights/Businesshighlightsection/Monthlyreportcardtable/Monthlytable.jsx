import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DownloadIcon from '@mui/icons-material/Download';
import "./Monthlytable.scss"

function createData(
  name: string,
  revenue: number,
  profit: number,
  GVMCollection: number,
  Transactionorder: number,
) {
  return { name, revenue,profit,GVMCollection,Transactionorder};
}

const rows = [
  createData('Jan`22',20,20,20,200 ),
  createData('Feb`22',19,19,19,150 ),
  createData('Mar`22',19,19,19,250 ),
  createData('Apr`22',15,15,15,100 ),
  createData('May`22',17,17,17,150 ),
  createData('Jun`22',16,16,16,200 ),
  createData('Jul`22',20,20,20,200 ),
  createData('Aug`22',19,19,19,150 ),
  createData('Sep`22',19,19,19,250 ),
  createData('Oct`22', 15,15,15,100),
  createData('Nov`22', 17,17,17,150),
  createData('Dec`22',16,16,16,200  ),
  
];

export default function BasicTable() {
  return (
    <div className="main">
    <div className='head'>
     <div><h3>Business Highlights</h3></div>
      <div><DownloadIcon/></div>
      </div>
      <div className='head-first'>
        <h3>Monthly Reportcard</h3>
      </div>
    <TableContainer component={Paper}>
      <Table  aria-label="simple table" className='monthly-table'>
        <TableHead>
          <TableRow className='table-row'>
            <TableCell style={{borderBottom:"none"}} className="tabledata">Reports</TableCell>
            <TableCell align="right" style={{borderBottom:"none"}} className="tabledata">Revenue</TableCell>
            <TableCell align="right" style={{borderBottom:"none"}} className="tabledata">Profit</TableCell>
            <TableCell align="right" style={{borderBottom:"none"}} className="tabledata">GMV Collection</TableCell>
            <TableCell align="right" style={{borderBottom:"none"}} className="tabledata">Transaction Order Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{borderBottom:"none"}} className="tabledata">
                {row.name}
              </TableCell>
              <TableCell align="right" style={{borderBottom:"none"}} className="tabledata">{row.revenue}</TableCell>
              <TableCell align="right" style={{borderBottom:"none"}} className="tabledata">{row.profit}</TableCell>
              <TableCell align="right" style={{borderBottom:"none"}} className="tabledata">{row.GVMCollection}</TableCell>
              <TableCell align="right" style={{borderBottom:"none"}} className="tabledata">{row.Transactionorder}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}