import React from 'react'
import "./transaction.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Transaction = () => {
    const rows=[
        {
            invester:"Norman Moss",
            datetime:"10th Oct",
            amt:"50,000",
        },
        {
            invester:"Jasmine Tillery",
            datetime:"24th Nov",
            amt:"50,000",
        },
        {
            invester:"Mabel Mallen",
            datetime:"2nd May",
            amt:"50,00,00",
        },
        {
            invester:"Don Sider",
            datetime:"15th Nov",
            amt:"20,000",
        },
    ]
  return (
   
       <TableContainer component={Paper}>
      <Table aria-label="simple table" className='trans-table'>
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Investor</TableCell>
            <TableCell className="tableCell">Date & Time</TableCell>
            <TableCell className="tableCell">Amount Invested</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            
            >
              <TableCell className="tableCell">
                {row.invester}
              </TableCell>
              <TableCell className="tableCell">{row.datetime}</TableCell>
              <TableCell className="tableCell">{row.amt}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default Transaction