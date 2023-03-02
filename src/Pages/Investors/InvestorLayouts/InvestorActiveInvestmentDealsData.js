import React from 'react'
import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";

import InvestorDashboardSidebar from '../../../Components/InvestorDashboardSidebar/InvestorDashboardSidebar'

import { useContext } from "react";

import { InvestmentDealsTable } from '../InvestorActiveInvestmentDeals/InvestimentDealsTables';
import InvestorNavbar from '../../../Components/InvestorNavbar/InvestorNavbar';
import ResponsiveInvestorNavabar from "../../../Components/ResponsiveInvestorNavbar/ResponsiveInvestorNavbar";

const InvestorActiveInvestmentDealsData = () => {
    const {Close} = useContext(SideBarContext)
    const viewport_width = document.documentElement.clientWidth;
  return (
    <div className="dashboard-alignment">
    {viewport_width > "1240" ? (
      <>
      <div className="dashboard-sidebar" style={{width: "18vw"}}>
      <InvestorDashboardSidebar/>
    </div>
    <div className="dashboard-content" style={{fontSize: '20px', backgroundColor: '#F5F5F5', height: '100%'}}>
      <div className="adminDashboard-Navbar">
        <InvestorNavbar type='investmentdeals' />
      </div>
      <div className="investor" style={{width: Close ? "95vw" : "82vw"}}>
          <InvestmentDealsTable/>
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
         <InvestorNavbar type="investmentdeals"  />
       </div>
       <div className="investor" style={{ width: "100vw"}}>
       <InvestmentDealsTable/>
       </div>
     </div>
         
       </>
     )
     } 
    
  </div>


  
  )
}

export default InvestorActiveInvestmentDealsData