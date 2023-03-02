import React from 'react'
import {Tabs, Tab, Typography} from '@mui/material'
import { useState } from "react";
import Monthlytablereport from './Businesshighlightsection/Monthlyreportcardtable/Monthlytablereport';
import Finanacialperformance from './Businesshighlightsection/Finanacialperformance/Finanacialperformance';
import EngagementPerformance from './Businesshighlightsection/EngagementPerformanceData/EngagementPerformance';
import BusinessPerformance from './Businesshighlightsection/BusinessPerformance/BusinessPerformance';
import BusinessUpdates from './Businesshighlightsection/BusinessUpdates/BusinessUpdates';
import DownloadIcon from '@mui/icons-material/Download';
import './Businesshighlights.scss'

const Businesshighlights = () => {
    const [value, setValue] = useState(0)
    const handleTabs = (e, val) =>{
      setValue(val)
    }
  return (
   <div className='tabs-section-sizing'>
    <div className = "heading-icon-section">
      <div><h3>Business Highlights</h3></div>
      <div><DownloadIcon/></div>

    </div>
 <div className='tab-sec'>
        <Tabs value={value} onChange={handleTabs}
aria-label="wrapped label tabs example"

className='tabs' id="tabs-row">
          <Tab label='Monthly ReportCard' className="tab" id="tabname" wrapped />
          <Tab label='Financial Performance' className="tab" id="tabname" wrapped />
          <Tab label='Engagment Performance' className="tab" id="tabname" wrapped/>
          <Tab label='Business Performance' className="tab" id="tabname" wrapped/>
          <Tab label='Business Updates' className="tab" id="tabname" wrapped/>

        </Tabs>

        <TabPanel value={value} index={0}>
         <Monthlytablereport/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Finanacialperformance/>
      </TabPanel>
      <TabPanel value={value} index={2}>
  <EngagementPerformance/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BusinessPerformance/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <BusinessUpdates/>
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


export default Businesshighlights