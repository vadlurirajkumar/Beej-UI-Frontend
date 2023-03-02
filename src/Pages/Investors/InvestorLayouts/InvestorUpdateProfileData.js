import React from 'react'
import UpdateInvestorProfile from '../ProfileInvestor/UpdateInvestorProfile/UpdateInvestorProfile'
import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";

import { useContext } from "react";
import InvestorDashboardSidebar from '../../../Components/InvestorDashboardSidebar/InvestorDashboardSidebar';
import InvestorNavbar from '../../../Components/InvestorNavbar/InvestorNavbar';
import ResponsiveInvestorNavabar from "../../../Components/ResponsiveInvestorNavbar/ResponsiveInvestorNavbar";

const InvestorUpdateProfileData = () => {
    const {Close} = useContext(SideBarContext)
    const viewport_width = document.documentElement.clientWidth;
  return (
    <div>
         <div className="dashboard-alignment">
         {viewport_width > "1240" ? (
          <>
      <div className="dashboard-sidebar" style={{width: "18vw"}}>
        <InvestorDashboardSidebar/>
      </div>
      <div className="dashboard-content" style={{fontSize: '20px', backgroundColor: '#F5F5F5'}}>
        <div className="adminDashboard-Navbar" style={{marginLeft: Close ? "5vw" : "15vw"}}>
          <InvestorNavbar type="editprofile"/>
        </div>
        <div className="investor" style={{width: Close? "95vw" : "82vw", marginTop: '8vh', marginLeft: Close ? "5vw" : "15vw" }}>
            <UpdateInvestorProfile/>
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
      <InvestorNavbar type="editprofile"/>
      </div>
      <div className="investor" style={{ width: "100vw"}}>
      <UpdateInvestorProfile/>
      </div>
    </div>
        
      </>
    )
    } 
    </div>
    </div>
  )
}

export default InvestorUpdateProfileData