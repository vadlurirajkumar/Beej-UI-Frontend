import React from 'react'
import './Investorprofile.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import prodata from './profileinv';


const Investorprofile = () => {
  return (
    <div className='investor-table-style'>
<h3>Investors </h3>
<TableContainer component={Paper}  className="table-style" style={{borderBottom:"none"}}>
    <Table className='table-sizing' style={{borderBottom:"none"}}>
        <TableHead>
            <TableRow >
                <TableCell style={{borderBottom:"none"}}className="inv">Investor</TableCell>
                <TableCell style={{borderBottom:"none"}}className="sec-invested">Sector Invested</TableCell>
            </TableRow>
        </TableHead>
        <TableBody> 
            {prodata.map((item)=>{
                    return(
                 <TableRow>
                  <TableCell style={{borderBottom:"none", padding:"6px"}}> 
                  <div className='celldata-spacing'>
                    <div><img src={item.image} alt="noimage" /></div>
                    <div className='inv-name'>{item.name}</div>
                    </div></TableCell>
                  <TableCell style={{borderBottom:"none", padding:"6px"}} className="sec-invested-name">{item.sectorInvested}</TableCell>
                    </TableRow>
                    )
                })
            }
        </TableBody>
    </Table>
</TableContainer>
    </div>
  )
}

export default Investorprofile