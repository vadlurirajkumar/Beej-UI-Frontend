import React from 'react'
import ProfileInvestor from '../ProfileInvestor/ProfileInvestor'

import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";

import { useContext } from "react";
import InvestorDashboardSidebar from '../../../Components/InvestorDashboardSidebar/InvestorDashboardSidebar';
import InvestorNavbar from '../../../Components/InvestorNavbar/InvestorNavbar';
import ResponsiveInvestorNavabar from "../../../Components/ResponsiveInvestorNavbar/ResponsiveInvestorNavbar";

const InvestorProfileDetails = () => {
  const {Close} = useContext(SideBarContext)
  const viewport_width = document.documentElement.clientWidth;
  return (
    <div className="dashboard-alignment">
    {viewport_width > "1240" ? (
      <>
      <div className="dashboard-sidebar" style={{width: "18vw"}}>
        <InvestorDashboardSidebar/>
      </div>
      <div className="dashboard-content" style={{backgroundColor: '#F8F8F8'}}>
        <div className="adminDashboard-Navbar">
          <InvestorNavbar type="investorprofile"/>
        </div>
        <div className="investor" style={{width: Close ? "95vw" : "80vw", margin: '10px', paddingTop: '11vh'}}>
            <ProfileInvestor/>
        </div>
      </div>
      </>
      ) : (
        <>
        <div className="dashboard-content" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="responsive-navbar">
          <ResponsiveInvestorNavabar />
        </div>
        <div className="adminDashboard-Navbar" style={{ marginTop:"10vh"}}>
        <InvestorNavbar type="investorprofile"/>
        </div>
        <div className="investor" style={{ width: "100vw"}}>
        <ProfileInvestor/>
        </div>
      </div>
          
        </>
      )
      } 
    </div>
  )
}

export default InvestorProfileDetails