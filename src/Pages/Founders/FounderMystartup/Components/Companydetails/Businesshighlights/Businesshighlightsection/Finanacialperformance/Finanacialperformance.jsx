import React from 'react'
import './Financial.scss'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RevenueData from './Financialperformancedata';
import  { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Finanacialperformance = () => {
  const data = [
    {
      name: 'Apr2022',
      profit:5,
      amt: 0,
    },
    {
      name: 'May2022',
      profit:20,
      amt: 5,
    },
    {
      name: 'Jun2022',
      profit:9,
      amt: 10,
    },
    {
      name: 'Jul2022',
      profit:5,
      amt: 15,
    },
    {
      name: 'Aug2022',
      profit:14,
      amt: 20,
    },
   
    
    
  ];

    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='accordion-content-style'>
    <div className='head-sec'>
      <h3>Financial Performance</h3>
    </div>
      <div className='accordial-Contetnt'>
      
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header" sx={{"background-color": "#EDEDED","border-radius":"10px"}}
          className = "accordion-style"
        >
          <div className='accordian-header'>
          <Typography sx={{ width: '33%', flexShrink: 0 }} className="rev">
          Revenue
          </Typography>
          <small>Last Updated - sep 16, 2022</small>
          </div>
        </AccordionSummary>
        <AccordionDetails className='revenu-detail'>
        <div className='Revenue-table'>
        <TableContainer component={Paper} className="table-style">
        <Table className='table-sizing'>
            <TableHead>
                <TableRow>
                    <TableCell style={{ padding:"6px",textAlign:"center"}}>Month</TableCell>
                    <TableCell style={{padding:"6px",textAlign:"center"}}>Profit</TableCell>
                </TableRow>
            </TableHead>
            <TableBody> 
                {RevenueData.map((item)=>{
                        return(
                     <TableRow>
                      <TableCell style={{borderBottom:"none",padding:"6px",textAlign:"center"}}><div className='celldata-spacing'> <div>{item.month}</div></div></TableCell>
                      <TableCell style={{borderBottom:"none",padding:"6px",textAlign:"center"}}>{item.profit}</TableCell>
                        </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
        <div className='button'>
        <button>View all</button>
        </div>
    </TableContainer>
   
    </div>
<div className='Revenue-Graph'>
    <ResponsiveContainer  aspect={2.5} className="revenue-graph">
        <LineChart
          width={900}
          height={800}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="amt"/>
          <Tooltip />
          
          <Line type="monotone" dataKey="profit" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="profit"  /> */}
        </LineChart>
      </ResponsiveContainer>
   
      </div>
         
        </AccordionDetails>
     </Accordion>
      </div>

      <div className='accordial-Contetnt'>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{"background-color": "#EDEDED","border-radius":"10px"}}
        >
          <div className='accordian-header'>
          <Typography sx={{ width: '33%', flexShrink: 0 }}  className="rev">
            Profit
          </Typography>
          <small>Last Updated - sep 16, 2022</small>
          </div>
        </AccordionSummary>
        <AccordionDetails className='revenu-detail'>
        <div className='Revenue-table'>
        <TableContainer component={Paper} className="table-style">
        <Table className='table-sizing'>
            <TableHead>
                <TableRow>
                    <TableCell style={{ padding:"6px",textAlign:"center"}}>Month</TableCell>
                    <TableCell style={{padding:"6px",textAlign:"center"}}>Profit</TableCell>
                </TableRow>
            </TableHead>
            <TableBody> 
                {RevenueData.map((item)=>{
                        return(
                     <TableRow>
                      <TableCell style={{borderBottom:"none",padding:"6px",textAlign:"center"}}><div className='celldata-spacing'> <div>{item.month}</div></div></TableCell>
                      <TableCell style={{borderBottom:"none",padding:"6px",textAlign:"center"}}>{item.profit}</TableCell>
                        </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
        <div className='button'>
        <button>View all</button>
        </div>
    </TableContainer>
   
    </div>
<div className='Revenue-Graph'>
    <ResponsiveContainer  aspect={2.5} className="revenue-graph">
        <LineChart
          width={900}
          height={800}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="amt"/>
          <Tooltip />
          
          <Line type="monotone" dataKey="profit" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="profit"  /> */}
        </LineChart>
      </ResponsiveContainer>
   
      </div>

        </AccordionDetails>
      </Accordion>
      </div>
      <div className='accordial-Contetnt'>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{"background-color": "#EDEDED","border-radius":"10px"}}
          
        >
          <div className='accordian-header'>
          <Typography sx={{ width: '33%', flexShrink:0}} className="rev">
          GMV/Collection
          </Typography>
          <small>Last Updated - sep 16, 2022</small>
          </div>
        </AccordionSummary>
        <AccordionDetails className='revenu-detail'>
        <div className='Revenue-table'>
        <TableContainer component={Paper} className="table-style">
        <Table className='table-sizing'>
            <TableHead>
                <TableRow>
                    <TableCell style={{ padding:"6px",textAlign:"center"}}>Month</TableCell>
                    <TableCell style={{padding:"6px",textAlign:"center"}}>Profit</TableCell>
                </TableRow>
            </TableHead>
            <TableBody> 
                {RevenueData.map((item)=>{
                        return(
                     <TableRow>
                      <TableCell style={{borderBottom:"none",padding:"6px",textAlign:"center"}}><div className='celldata-spacing'> <div>{item.month}</div></div></TableCell>
                      <TableCell style={{borderBottom:"none",padding:"6px",textAlign:"center"}}>{item.profit}</TableCell>
                        </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
        <div className='button'>
        <button>View all</button>
        </div>
    </TableContainer>
   
    </div>
<div className='Revenue-Graph'>
    <ResponsiveContainer  aspect={2.5} className="revenue-graph">
        <LineChart
          width={900}
          height={800}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="amt"/>
          <Tooltip />
          
          <Line type="monotone" dataKey="profit" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="profit"  /> */}
        </LineChart>
      </ResponsiveContainer>
   
      </div>
        </AccordionDetails>
      </Accordion>
      </div>
      
    </div>
  )
}

export default Finanacialperformance