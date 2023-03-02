import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Finanacialele.scss'
import {LineChart,Line ,XAxis,YAxis, ResponsiveContainer} from 'recharts';

const revenuedata = [
    {
        id:"1",
      month:'Jan2022',
     revenue:2
},
{
    id:"2",
  month:'Feb2022',
 revenue:6
},
{
id:"3",
month:'March2022',
revenue:10
},
{
id:"4",
month:'April2022',
revenue:15
},
{
id:"5",
month:'May2022',
revenue:11
},
{
id:"6",
month:'June2022',
revenue:16
},
{
id:"7",
month:'July2022',
revenue:20
},
{
id:"8",
month:'Aug2022',
revenue:18
},
{
id:"9",
month:'Sep2022',
revenue:16
},
{
id:"10",
month:'Oct2022',
revenue:13
},
{
id:"11",
month:'Nov2022',
revenue:16
},
{
id:"12",
month:'Dec2022',
revenue:28
}   ]

function createData(Month,Profit  ) {
    return {Month,Profit};
  }

  const rows = [
    createData('Sep2022',20000 ),
    createData('Aug2022',15000 ),
    createData('July2022',10000 ),
    createData('Jun2022',20000 ),
    createData('May2022',15000 ),
    createData('Apr2022',5000 ),




];



const FinancialRevenueitems1 = () => {
  return (
    <div className='table-graph'>
    <div className='table-size'>
     <TableContainer>
      <Table sx={{Width: 400 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Profit</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
           return(
            <TableRow>
            <TableCell style={{borderBottom:"none"}}>{row.Month}</TableCell>
            <TableCell style={{borderBottom:"none"}}>{row.Profit}</TableCell>
          </TableRow>
           )
           })}
        </TableBody>
      </Table>
    </TableContainer>


    </div>
    <div className='revenugraphs'>
    <ResponsiveContainer width="100%" aspect={3} className="Revnuemainclass">
<LineChart data={revenuedata} width={600} height={600}>
    <XAxis dataKey="month"/>
    <YAxis dataKey="revenue"/>
<Line dataKey="revenue" type="monotone" strokeWidth={3}/>
</LineChart>
</ResponsiveContainer>
<span className='xaxisunits'><p>Months</p></span>
<span className='yaxisunits'><p>Month collection</p></span>
    </div>
    </div>

  )
}

export default FinancialRevenueitems1