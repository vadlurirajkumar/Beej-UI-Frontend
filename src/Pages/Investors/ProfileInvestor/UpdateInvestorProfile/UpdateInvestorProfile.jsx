import React from 'react'
import InvestorPersonal from './InvestorPersonalInfo/InvestorPersonal'

import {Tabs, Tab, Typography} from '@mui/material'

import { useState,useContext } from "react";

import InvestorKYC from './InvestorKYCDetails/InvestorKYC';
import InvestorRelatives from './InvestorRelatives/InvestorRelatives';
import InvestorEducation from './InvestorEducationDetails/InvestorEducation';

import './UpdateInvestorProfile.scss';
import { SideBarContext } from '../../../../AdminSidebarContex/SidebarContext';


const UpdateInvestorProfile = () => {
  const {Close} = useContext(SideBarContext)

    const [value, setValue] = useState(0)
  const handleTabs = (e, val) =>{
    setValue(val)
  }

  return (
    <div className="update-investors" style={{width: Close? "95vw" : "82vw"}}>

    <Tabs value={value} onChange={handleTabs} className='tabs' >
      <Tab label='Personal Information' className="tab" />
      <Tab label='KYC Details' className="tab" />
      <Tab label='Relatives ' className="tab"/>
      <Tab label='Education Details' className="tab"/>
    </Tabs>

  <TabPanel value={value} index={0}>
    <InvestorPersonal/>
  </TabPanel>
  <TabPanel value={value} index={1}>
  <InvestorKYC/>
  </TabPanel>
  <TabPanel value={value} index={2}>
  <InvestorRelatives/>
  </TabPanel>
  <TabPanel value={value} index={3}>
  <InvestorEducation/>
  </TabPanel>
  
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

export default UpdateInvestorProfile