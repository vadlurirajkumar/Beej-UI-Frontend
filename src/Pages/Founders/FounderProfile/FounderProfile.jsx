import React from "react";
import { Link } from "react-router-dom";
import "./founderprofile.scss";
import profiledata, { profileimage } from "./Components/founderprofile";
import img from "../../../Assets/settingicon.png";
import background from "../../../Assets/background.png";
import { useContext } from "react";
import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";


import EditIcon from "@mui/icons-material/Edit";
import FounderDashboardSidebar from "../../../Components/FounderSidebar/FounderDashboardSidebar";
import FounderNavabr from "../../../Components/FounderNavbar/FounderNavabr";
import ResponsiveFounderNavbar from "../../../Components/ResponsivefounderNavbar/ResponsiveFounderNavbar";

const FounderProfile = () => {
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
            <div className="adminDashboard-Navbar" style={{width: Close ? "95vw": "82vw", marginLeft:Close?"5vw":"18vw"}}>
            <FounderNavabr type="founderProfile" />
          </div>
              <div
                className="founderprofile"
                style={{
                  width: Close ? "93vw" : "80vw",
                  marginLeft: Close ? "6vw" : "19vw",
                  marginTop: "10vh",
                }}
              >
                {profileimage.map((item) => {
                  return (
                    <div className="backgroundimage">
                      <img src={background} alt="" />
                      <div className="profileimage">
                        <img src={item.img} alt="" />
                        <p>{item.name}</p>
                        <p>
                          Here for :<span>Service</span>
                        </p>
                      </div>
                      <button>
                        <Link to="/founder/profileEdit">
                          <EditIcon />
                          <span>Edit</span>
                        </Link>
                      </button>
                    </div>
                  );
                })}
                <div className="Careerpedia">
                <div
                  className="careerpedia"
                  
                >
                  <div className="img">
                    <img src={img} alt="" />
                    <div className="text">
                    <h6>Careerpedia</h6>
                  <span id="url">https://www.careerpedia.com/</span>
                  </div>
                  </div>

                  <div className="content">
                  
                    <p id="data">
                      A high-net-worth individual who provides financial backing
                      for small startups or entrepreneurs, typically in exchange
                      for ownership equity in the company.
                    </p>
                  </div>
                </div>
                </div>
                <div className="profileContainer">
                  {profiledata.map((input) => {
                    return (
                      <>
                        <div className="userinput" key={input.id}>
                          <label>{input.label}</label>
                          <input className={input.ClassNames}
                            type={input.type}
                            placeholder={input.placeholder}
                            key={input.id}
                            style={{ width: input.width, height: input.height }}
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
          <>
          <div className="adminDashboard-Navbar" style={{width: "100vw", marginTop:"10vh"}}>
            <FounderNavabr type="founderProfile" />
          </div>
            <div
              className="founderprofile"
              style={{
                width: "100vw",
                marginLeft: 0,
                marginTop: "10vh",
              }}
            >
              {profileimage.map((item) => {
                return (
                  <div className="backgroundimage">
                    <img src={background} alt="" />
                    <div className="profileimage">
                      <img src={item.img} alt="" />
                      <p>{item.name}</p>
                      <p>
                        Here for :<span>Service</span>
                      </p>
                    </div>
                    <button>
                      <Link to="/founder/profileEdit">
                        <EditIcon />
                       <span>Edit</span> 
                      </Link>
                    </button>
                  </div>
                );
              })}
              <div className="Careerpedia">
              <div
                className="careerpedia"
                
              >
                <div className="img">
                  <img src={img} alt="" />
                  <div className="text">
                  <h6>Careerpedia</h6>
                  <span id="url">https://www.careerpedia.com/</span>
                  </div>
                </div>

                <div className="content">
                  
                  <p id="data"> 
                    A high-net-worth individual who provides financial backing
                    for small startups or entrepreneurs, typically in exchange
                    for ownership equity in the company.
                  </p>
                </div>
              </div>
              </div>
              <div className="profileContainer">
                {profiledata.map((input) => {
                  return (
                    <>
                      <div className="userinput" key={input.id}>
                        <label>{input.label}</label>
                        <input className={input.ClassNames}
                          type={input.type}
                          placeholder={input.placeholder}
                          key={input.id}
                          style={{ width: input.width, height: input.height }}
                        />
                    
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FounderProfile;
