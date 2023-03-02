import React from 'react'
import "./Myinvesters.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import MessageIcon from '@mui/icons-material/Message';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

const MyInvesters = () => {
    const rows=[
        {
            invester:"Norman Moss",
            startupname:"Financial capital services",
            mesg:<ChatOutlinedIcon/>,
        },
        {
            invester:"Norman Moss",
            startupname:"Moon ventures",
            mesg:<ChatOutlinedIcon/>, 
        },
        {
            invester:"Norman Moss",
            startupname:"First analysis corporation",
            mesg:<ChatOutlinedIcon/>,
        },
        {
            invester:"Norman Moss",
            startupname:"Money pools",
            mesg:<ChatOutlinedIcon/>,
        },
    ]
  return (
    <div className='Myinvester'>
   
        <TableContainer component={Paper}>
      <Table aria-label="simple table" className='ftable'>
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Investor</TableCell>
            <TableCell className="tableCell">Startup name</TableCell>
            <TableCell className="tableCell">Message</TableCell>
            
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
              <TableCell className="tableCell">{row.startupname}</TableCell>
              <TableCell className="tableCell">{row.mesg}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  )
}

export default MyInvesters