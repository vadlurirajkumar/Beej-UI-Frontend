import React from "react";
import AdminDashboardSidebar from "../../../Components/AdminDashboardSidebar/AdminDashboardSidebar";
import AdminNavbar from "../../../Components/AdminNavbar/AdminNavbar";
import "./AdminHomePage.scss";
import HeroSection from "./Components/HeroSection/HeroSection";
import AdminHomeSidebar from "./../../../Components/AdminHomeSidebar/AdminHomeSidebar";
import { useContext } from "react";
import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";


const AdminHomePage = () => {
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
            <div className="adminHomeSidebar" style={{marginLeft: Close ? "5vw" : "15vw", width: '15vw', position: 'fixed', zIndex: '1111', transition: 'all 0.8s ease', marginTop: '10vh'}}>
              <AdminHomeSidebar />
            </div>
            <div className="admin-sideContent" style={{marginLeft: Close ? "20vw" : "30vw", width: Close? "80vw" : "70vw", marginTop: '10vh'}}>
               <HeroSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHomePage;
