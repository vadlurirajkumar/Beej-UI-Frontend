import React from "react";
import { Navbar } from "../AdminDashboardSidebar/Components/AdminSidebarStyle";
// import { MessageIcon, NotificationIcon } from "../../Assets/icons.jsx";
import msgIcon from "../../Assets/message.svg"
import noticationIcon from "../../Assets/notification.svg"
import "./AdminNavbar.scss";
import { useContext } from "react";

import { SideBarContext } from "../../AdminSidebarContex/SidebarContext";

const AdminNavbar = ({ type }) => {
  let head;
  const { Close } = useContext(SideBarContext);

  switch (type) {
    case "dashboard":
      head = {
        name: "Overview",
      };
      break;
    case "founder":
      head = {
        name: "Founder",
      };
      break;
    case "investor":
      head = {
        name: "Investor",
      };
      break;
    case "startup":
      head = {
        name: "Startup",
      };
      break;
    case "homepage":
      head = {
        name: "Home Page",
      };
      break;
    case "deals":
      head = {
        name: "Deals",
      };
      break;
    default:
      break;
  }

  return (
    <>
      <div className="nav">
        <Navbar Close={Close} className="admin-navbar" style={{marginLeft: Close ? "5vw" : "15vw", position: 'fixed', zIndex: '1111', transition: 'all 0.8s ease'}}>
          <div className="nav-head">
            <h2>{head.name}</h2>
          </div>
          <div className="nav-icons">
            <img src={msgIcon} alt="" />
            <img src={noticationIcon} alt="" />
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default AdminNavbar;
