import React from "react";
import { Navbar } from "../FounderSidebar/Components/FounderSidebarStyle";
import { MessageIcon, NotificationIcon } from "../../Assets/icons.jsx";
import "./FounderNavbar.scss";
import { useContext } from "react";

import { SideBarContext } from "../../AdminSidebarContex/SidebarContext";

const FounderNavabr = ({ type }) => {
  let head;
  const { Close } = useContext(SideBarContext);

  switch (type) {
    case "dashboard":
      head = {
        name: "Overview",
      };
      break;
    case "MyStartup":
      head = {
        name: "My Startup",
        color:"#0A3E2F"
      };
      break;
      case "startupProfile":
        head = {
          name: "Startup Profile",
          color:"#0A3E2F"
        };
      break;
    case "financial":
      head = {
        name: "Financials",
        color:"#0A3E2F"

      };
      break;
      case "founderProfile":
        head = {
          name: "Founder Profile",
          color:"#0A3E2F"
  
        };
        break;
        case "editfounderProfile":
        head = {
          name: "Edit Founder Profile",
          color:"#0A3E2F"
  
        };
        break;
    
      
      
    default:
      break;
  }

  return (
    <>
      <div className="nav">
        <Navbar Close={Close} className="nav-style" style={{marginLeft: Close ? "" : "", position: 'fixed', zIndex: '1111', transition: 'all 0.8s ease'}}>
          <div className="nav-head">
            <h2 style={{color:head.color}} className="Nav-head" >{head.name}</h2>
          </div>
          <div className="nav-icons">
            <MessageIcon />
            <NotificationIcon />
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default FounderNavabr;
