import React from "react";
import AdminDashboardSidebar from "../../../Components/AdminDashboardSidebar/AdminDashboardSidebar";
import AdminNavbar from "../../../Components/AdminNavbar/AdminNavbar";
import "./AdminDashboard.scss";
// improt components of admin dashboard
import Cards from "./Components/Cards/Cards";
import DoubleGraph from "./Components/DoubleGraph/DoubleGraph";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import SingleGraph from "./Components/SingleGraph/SingleGraph";
import TableData from "./Components/TableData/TableData";
import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";
import { useContext } from "react";

const AdminDashboard = () => {
  const viewport_width = document.documentElement.clientWidth;
  const { Close } = useContext(SideBarContext);

  return (
    <>
      <div className="dashboard-alignment">
        <div className="dashboard-sidebar" >
          <AdminDashboardSidebar />
        </div>
        <div className="dashboard-content">
          <div className="adminDashboard-Navbar">
            <AdminNavbar type="dashboard" />
          </div>

          <div
            className="dashboard-data"
            style={{ marginLeft: Close ? "5vw" : "15vw", marginTop: "10vh" }}
          >
            <Cards />
            <div className="graphs">
              <DoubleGraph />
              <ProgressBar />
            </div>
            <div className="graphs">
              <TableData />
          <SingleGraph />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
