import React from 'react'
import "../../AdminHomePage.scss";
import { useContext } from "react";
import { SideBarContext } from '../../../../../AdminSidebarContex/SidebarContext';
import AdminDashboardSidebar from '../../../../../Components/AdminDashboardSidebar/AdminDashboardSidebar';
import AdminHomeSidebar from '../../../../../Components/AdminHomeSidebar/AdminHomeSidebar';
import AdminNavbar from '../../../../../Components/AdminNavbar/AdminNavbar';
import TestimonialCards from './Components/TestimonialCards/TestimonialCards';

const Testimonials = () => {
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
            <TestimonialCards/>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Testimonials