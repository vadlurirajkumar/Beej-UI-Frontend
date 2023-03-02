import React from 'react'
import "../../AdminHomePage.scss"
import "./FeaturedInvestorsAndFounders.scss"
import { useContext } from "react";
import { SideBarContext } from '../../../../../AdminSidebarContex/SidebarContext';
import AdminDashboardSidebar from '../../../../../Components/AdminDashboardSidebar/AdminDashboardSidebar';
import AdminNavbar from '../../../../../Components/AdminNavbar/AdminNavbar';
import AdminHomeSidebar from '../../../../../Components/AdminHomeSidebar/AdminHomeSidebar';
import FeatureInvestorCard from './Components/FeatureInvestorCard';

const FeaturedInvestorsAndFounders = () => {
  const {Close} = useContext(SideBarContext)

  return (
    <>
      <div className="dashboard-alignment">
        <div className="dashboard-sidebar">
          <AdminDashboardSidebar />
        </div>
        <div className="dashboard-content">
          <div className="adminDashboard-Navbar">
            <AdminNavbar type="homepage" />
          </div>
          <div className="adminHomepage-content">
            <div className="adminHomeSidebar" style={{width: "15vw",marginLeft: Close ? "5vw" : "15vw",marginTop: '10vh'}}>
              <AdminHomeSidebar />
            </div>
            <div className="admin-sideContent" style={{width: Close? "80vw" : "70vw",marginTop: '10vh'}}>
               <div className="investorCard">
               <FeatureInvestorCard type="invest"/>
               </div>
               <div className="founderCard">
               <FeatureInvestorCard type="found"/>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedInvestorsAndFounders
