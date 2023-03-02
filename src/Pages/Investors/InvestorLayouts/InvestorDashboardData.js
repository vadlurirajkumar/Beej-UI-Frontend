import React from 'react'

import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";

// import AdminDashboardSidebar from '../../../Components/AdminDashboardSidebar/AdminDashboardSidebar'
// import AdminNavbar from '../../../Components/AdminNavbar/AdminNavbar'

import { useContext } from "react";

import InvestorDashboardSidebar from '../../../Components/InvestorDashboardSidebar/InvestorDashboardSidebar';
import InvestorDashboard from '../InvestorDashboard/InvestorDashboard';
import InvestorNavbar from '../../../Components/InvestorNavbar/InvestorNavbar';
import ResponsiveInvestorNavabar from "../../../Components/ResponsiveInvestorNavbar/ResponsiveInvestorNavbar";

const InvestorDashboardData = () => {
    const {Close} = useContext(SideBarContext)
    const viewport_width = document.documentElement.clientWidth;

    return (
      <div className="dashboard-alignment">
      {viewport_width > "1240" ? (
        <>
        <div className="dashboard-sidebar" style={{width: "18vw"}}>
          <InvestorDashboardSidebar/>
        </div>
        <div className="dashboard-content" style={{fontSize: '20px', backgroundColor: '#F5F5F5'}}>
          <div className="adminDashboard-Navbar" >
            <InvestorNavbar type='dashboard' style={{paddingLeft:'20px'}}/>
          </div>
          <div className="investor" style={{width: Close ? "95vw" : "82vw"}}>
              <InvestorDashboard/>
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
        <InvestorNavbar type="dashboard"/>
        </div>
        <div className="investor" style={{ width: "100vw"}}>
        <InvestorDashboard/>
        </div>
      </div>
          
        </>
      )
      } 
      </div>
    )
}

export default InvestorDashboardData