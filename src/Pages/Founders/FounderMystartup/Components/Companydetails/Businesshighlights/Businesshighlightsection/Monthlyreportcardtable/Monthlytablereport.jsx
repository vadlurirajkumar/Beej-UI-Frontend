import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Monthlytable.scss'


function createData(Reports, Jan2022, Feb2022,March2022,April2022,May2022,June2022,July2022,Aug2022,Sep2022,Oct2022,Nov2022,Dec2022  ) {
    return {Reports, Jan2022, Feb2022,March2022,April2022,May2022,June2022,July2022,Aug2022,Sep2022,Oct2022,Nov2022,Dec2022 };
  }
  
  const rows = [
    createData('Revenue',20,19,19,15,17,16,20,19,17,13,20,19 ),
    createData('Profit',20,19,19,15,17,16,20,19,19,15,17,16 ),
    createData('GVMCollection',20,19,19,15,17,16,20,19,19,15,17,16 ),
    createData('Transactionorder',200,150,250,100,150,200,200,150,250,100,150,200 ),


];
  

const Monthlytablereport = () => {
  return (
    <div className="main">
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , overflowX:"auto"}} aria-label="caption table" >
        <TableHead>
          <TableRow className='table-row'>
            <TableCell style={{borderBottom:"none"}} className="tabledata">Reports</TableCell>
            <div className='data'>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">Jan22</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">Feb22</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">Mar22</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">April22</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">May22</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">June22</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">Jul22</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">Aug22</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">Sep22</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">Oct22</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">Nov22</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">Dec22</TableCell>
            </div>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
           return(
            <TableRow className='table-row'>
            <TableCell style={{borderBottom:"none"}} component="th" scope="row" className='tabledata'>
              {row.Reports}
            </TableCell>
            <div className='data'>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">{row.Jan2022}</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">{row.Feb2022}</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">{row.March2022}</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">{row.April2022}</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">{row.May2022}</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right"  className="tabledata">{row.June2022}</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right" className='tabledata'>{row.July2022}</TableCell>
            
            <TableCell style={{borderBottom:"none"}} align="right" className='tabledata'>{row.Aug2022}</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right" className='tabledata'>{row.Sep2022}</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right" className='tabledata'>{row.Oct2022}</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right" className='tabledata'>{row.Nov2022}</TableCell>
            <TableCell style={{borderBottom:"none"}} align="right" className='tabledata'>{row.Dec2022}</TableCell>
</div>
          </TableRow>
           )
           })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Monthlytablereport