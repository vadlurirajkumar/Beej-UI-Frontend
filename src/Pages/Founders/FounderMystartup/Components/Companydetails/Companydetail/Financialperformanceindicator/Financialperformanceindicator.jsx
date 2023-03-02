import React from 'react'
import {Tabs, Tab, Typography} from '@mui/material'
import { useState } from "react";
import Gvmcollection from './GVMcollectionchart/Gvmcollection'
import Profit from './Profitchart/Profit'
import Revenue from './Revenuechart/Revenue'
import Transaction from './Transactioncountchart/Transaction'
import './Financialperformanceindicator.scss'

const Financialperformanceindicator = () => {
    const [value, setValue] = useState(0)
  const handleTabs = (e, val) =>{
    setValue(val)
  }
  return (
    <div className='finaicial-heading'>
   <h3>Financial performance indicator</h3>
        

      <div  className="investors">
      <Tabs value={value} onChange={handleTabs} 
      aria-label="wrapped label tabs example"
      className='tabs'>
          <Tab label='Revenue' className="tab"  wrapped/>
          <Tab label='Profit' className="tab" wrapped/>
          <Tab label='GVMcollection' className="tab"  wrapped/>
          <Tab label='Transaction/Order Count' className="tab"  wrapped/>

        </Tabs> 
        
      <TabPanel value={value} index={0}>
       <Revenue/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Profit/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Gvmcollection/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Transaction/>
      </TabPanel>
      </div>
      
    </div>     
  )
}


function TabPanel(props){
    const {children, value, index} = props;
    return(
    <div>
      {
        value === index && (
          <Typography>{children}</Typography>
        )
      }
    </div>
    )
  }

export default Financialperformanceindicator