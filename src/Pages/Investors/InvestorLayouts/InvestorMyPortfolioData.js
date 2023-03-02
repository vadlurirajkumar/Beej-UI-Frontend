import React from 'react'

import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";
import { useContext } from "react";

import InvestorPortfolio from '../InvestorMyPortfolio/InvestorPortfolio';
import InvestorDashboardSidebar from '../../../Components/InvestorDashboardSidebar/InvestorDashboardSidebar';
import InvestorNavbar from '../../../Components/InvestorNavbar/InvestorNavbar';
import ResponsiveInvestorNavabar from "../../../Components/ResponsiveInvestorNavbar/ResponsiveInvestorNavbar";

const InvestorMyPortfolioData = () => {
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
        <div className="adminDashboard-Navbar">
          <InvestorNavbar type="myportfolio"/>
        </div>
        <div className="investor" style={{width: Close ? "95vw" : "82vw"}}>
            <InvestorPortfolio/>
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
        <InvestorNavbar type="myportfolio"/>
        </div>
        <div className="investor" style={{ width: "100vw"}}>
        <InvestorPortfolio/>
        </div>
      </div>
          
        </>
      )
      } 
     
    </div>
  )
}    

export default InvestorMyPortfolioData