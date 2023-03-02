import React from "react";
import { Navbar } from "../InvestorDashboardSidebar/Components/InvestorSidebarStyle";
import msgIcon from "../../Assets/message.svg"
import noticationIcon from "../../Assets/notification.svg"
import "./InvestorNavbar.scss";
import { useContext } from "react";

import { SideBarContext } from "../../AdminSidebarContex/SidebarContext";

const InvestorNavbar = ({ type }) => {
  let head;
  const { Close } = useContext(SideBarContext);

  switch (type) {
    case "dashboard":
      head = {
        name: "Overview",
      };
      break;
    case "investmentdeals":
      head = {
        name: "Active Investment Deals",
      };
      break;
    case "myportfolio":
      head = {
        name: "My Portfolio",
      };
      break;
    case "startupcards":
      head = {
        name: "Startups",
      };
      break;
    case "venturepartner":
      head = {
        name: "Venture Partner",
      };
      break;
    case "investorprofile":
      head = {
        name: "Investor Profile",
      };
      break;
    case "editprofile":
      head = {
        name: "Edit Profile",
      };
      break;
    default:
      break;
  }

  return (
    <>
      <div className="nav">
        <Navbar
          Close={Close}
          className="investor-navbar"
          style={{
            marginLeft: Close ? "" : "",
            position: "fixed",
            zIndex: "111",
            transition: "all 0.8s ease",
          }}
        >
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

export default InvestorNavbar;
