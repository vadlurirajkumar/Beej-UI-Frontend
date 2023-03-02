import React from 'react'
import './Teamprofile.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import profiledata from './profileteam';

const Teamprofile = () => {
  return (
    <div className='teamprofile-table-style'>
    <h3>Team</h3>
    <TableContainer component={Paper} className="table-style">
        <Table className='table-sizing'>
            <TableHead>
                <TableRow>
                    <TableCell style={{borderBottom:"none", padding:"6px"}}className="prof">Profile</TableCell>
                    <TableCell style={{borderBottom:"none",padding:"6px"}}className="prof">Designation</TableCell>
                </TableRow>
            </TableHead>
            <TableBody> 
                {profiledata.map((item)=>{
                        return(
                     <TableRow>
                      <TableCell style={{borderBottom:"none",padding:"6px"}}><div className='celldata-spacing'> <div><img src={item.image} alt="noimage" /></div><div className='prof-name'>{item.name}</div></div></TableCell>
                      <TableCell style={{borderBottom:"none",padding:"6px"}} className="prof-name">{item.sectorInvested}</TableCell>
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

export default Teamprofile