import React from "react";
import "./dashboard.scss";
import Card from "../../../Pages/Founders/FounderDashboard/Components/Card/Card";
import Graph from "../../../Pages/Founders/FounderDashboard/Components/Graph/Graph";
import Fund from "./Components/Funds/Fund";
import Transaction from "./Components/Transactions/Transaction";
import MyInvesters from "./Components/MyInvesters/MyInvesters";
// import AdminDashboardSidebar from "../../../Components/AdminDashboardSidebar/AdminDashboardSidebar";
import AdminNavbar from "../../../Components/AdminNavbar/AdminNavbar";
import FounderNavbar from "../../../Components/FounderNavbar/FounderNavabr";

import { useContext } from "react";
import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";
import FounderDashboardSidebar from "../../../Components/FounderSidebar/FounderDashboardSidebar";
import ResponsiveFounderNavbar from "../../../Components/ResponsivefounderNavbar/ResponsiveFounderNavbar";

const Dashboard = () => {
  const { Close } = useContext(SideBarContext);
  const viewport_width = document.documentElement.clientWidth;
  return (
    <>
      <div className="dashboard-alignment">
        <div className="dashboard-sidebar">
          <FounderDashboardSidebar />
        </div>
      
        
        <div className="dashboard-content">
        <div className="sidebarNavbar" >
          <ResponsiveFounderNavbar/>
        </div>
        
         
          {viewport_width > "1240" ? (
            <>
            <div className="adminDashboard-Navbar" style={{width: Close ? "95vw" : "82vw", marginLeft:Close?"5vw":"18vw"}}>
            <FounderNavbar type="dashboard"/>
          </div>
              <div
                className="dashboard"
                style={{
                  width: Close ? "95vw" : "82vw",
                  marginLeft: Close ? "5vw" : "18vw",
                  marginTop: "8vh",
                }}
              >
                <div className="founderdashboard">
                  <Card />

                  <div className="graphs">
                    <Graph />
                    <Fund />
                  </div>
                  <div className="transactions">
                    <div className="transaction">
                      <h3>Transactions (All startups of founder)</h3>
                      <Transaction />
                    </div>
                    <div className="myinvesters">
                      <h3> My Investors</h3>
                      <MyInvesters />
                    </div>
                  </div>
                </div>
              </div>{" "}
            </>
          ) : (
            <>
            <div className="adminDashboard-Navbar" style={{ width:"100vw", marginTop:"10vh"}}>
            <FounderNavbar type="dashboard"/>
          </div>
              <div
                className="dashboard"
                style={{
                  width: "100vw",
                  marginLeft: 0,
                  marginTop: "8vh",
                }}
              >
                <div className="founderdashboard">
                  <Card />

                  <div className="graphs">
                    <Graph />
                    <Fund />
                  </div>
                  <div className="transactions">
                    <div className="transaction">
                      <h3>Transactions (All startups of founder)</h3>
                      <Transaction />
                    </div>
                    <div className="myinvesters">
                      <h3> My Investors</h3>
                      <MyInvesters />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
