import "./ResponsiveInvestorNavbar.scss";
import Beej from "../../Assets/beejLogo.png";
import UserImg from "../../Assets/InvestorProfile.png";
import { Link } from "react-router-dom";
import {
  LogoWrapper,
  Logo,
  LogoText,
  SideTabWrapper,
  TopWrapper,
  BottomWrapper,
} from "../InvestorDashboardSidebar/Components/InvestorSidebarStyle";
import {
  DashboardIcon,
  FoundersIcon,
  InvestorsIcon,
  StartupIcon,
  HomePageIcon,
  LogoutIcon,
} from "../../Assets/icons.jsx";
import { useState } from "react";

import { FaTimes, FaBars } from "react-icons/fa";

import { NavLink } from "react-router-dom";

function ResponsiveInvestorNavbar() {
  const [click, setClick] = useState(false);

  const handleclick = () => {
    setClick(!click);
  };

  const ListOne = [
    {
      name: (
        <NavLink
          to="/investor/dashboard"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "",
              fontWeight: isActive ? "bolder" : "500",
              font: isActive ? "18px" : "16px",
            };
          }}
        >
          DashBoard
        </NavLink>
      ),
      icon: (
        <NavLink
          to="/investor/dashboard"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "",
              fontWeight: isActive ? "bolder" : "500",
              font: isActive ? "18px" : "16px",
            };
          }}
        >
          <DashboardIcon />
        </NavLink>
      ),
    },
    {
      name: (
        <NavLink
          to="/investor/investmentdeals"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "",
              fontWeight: isActive ? "bolder" : "500",
              font: isActive ? "14px" : "16px",
            };
          }}
        >
          Active Investment Deals
        </NavLink>
      ),
      icon: (
        <NavLink
          to="/investor/investmentdeals"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "",
              fontWeight: isActive ? "bolder" : "500",
              font: isActive ? "20px" : "18px",
            };
          }}
        >
          <FoundersIcon />
        </NavLink>
      ),
    },
    {
      name: (
        <NavLink
          to="/investor/myportfolio"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "",
              fontWeight: isActive ? "bolder" : "500",
              font: isActive ? "20px" : "18px",
            };
          }}
        >
          My Portfolio
        </NavLink>
      ),
      icon: (
        <NavLink
          to="/investor/myportfolio"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "",
              fontWeight: isActive ? "bolder" : "500",
              font: isActive ? "20px" : "18px",
            };
          }}
        >
          <InvestorsIcon />
        </NavLink>
      ),
    },
    {
      name: (
        <NavLink
          to="/investor/startupcards"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "",
              fontWeight: isActive ? "bolder" : "500",
              font: isActive ? "20px" : "18px",
            };
          }}
        >
          Startups
        </NavLink>
      ),
      icon: (
        <NavLink
          to="/investor/startupcards"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "",
              fontWeight: isActive ? "bolder" : "500",
              font: isActive ? "20px" : "18px",
            };
          }}
        >
          <StartupIcon />
        </NavLink>
      ),
    },
    // {
    //   name: (
    //     <NavLink
    //       to="/investor/venturepartner"
    //       style={({ isActive }) => {
    //         return {
    //           color: isActive ? "#023122" : "",
    //           fontWeight: isActive ? "bolder" : "500",
    //           font: isActive ? "18px" : "16px",
    //         };
    //       }}
    //     >
    //       Venture Partner
    //     </NavLink>
    //   ),
    //   icon: (
    //     <NavLink
    //       to="/investor/venturepartner"
    //       style={({ isActive }) => {
    //         return {
    //           color: isActive ? "#023122" : "",
    //           fontWeight: isActive ? "bolder" : "500",
    //           font: isActive ? "18px" : "16px",
    //         };
    //       }}
    //     >
    //       <HomePageIcon />
    //     </NavLink>
    //   ),
    // },
  ];

  const ListTwo = [
    {
      name: (
        <NavLink
          to="/login"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "",
              fontWeight: isActive ? "bolder" : "500",
              font: isActive ? "20px" : "18px",
            };
          }}
        >
          Logout
        </NavLink>
      ),
      icon: (
        <NavLink
          to="/login"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "",
              fontWeight: isActive ? "bolder" : "500",
              font: isActive ? "20px" : "18px",
            };
          }}
        >
          <LogoutIcon />
        </NavLink>
      ),
    },
  ];
  return (
    <div className="ResponsiveFounderNavbar">
      <div className="image">
       <Link to="/"> <img src={Beej} alt="" /></Link>
      </div>
      <div className={click ? "menu active" : "menu"}>
        <div className="FounderSide">
          <div className="investor-sideview">
            <LogoWrapper className="user-view">
              <Logo className="user-img">
                <img src={UserImg} alt="" />
              </Logo>
              <LogoText>
                <p>
                  <Link to="/investor/profile">Vincent Corter </Link>
                </p>
                <p>
                  <Link
                    to="/investor/profile"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Investor
                  </Link>{" "}
                  |{" "}
                  <Link
                    to="/founder/profile"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Founder
                  </Link>
                </p>
              </LogoText>
            </LogoWrapper>

            <div className="down-bar">
              <p>Profile Status</p>
              <div className="progress">
                <div className="inner"></div>
                <p>82.4%</p>
              </div>
            </div>
          </div>

          <SideTabWrapper>
            <TopWrapper>
              {ListOne.map((item) => {
                const { name, icon } = item;
                return (
                  <>
                    <LogoWrapper>
                      <Logo>{icon}</Logo>
                      <LogoText>
                        <span>{name}</span>
                      </LogoText>
                    </LogoWrapper>
                  </>
                );
              })}
            </TopWrapper>

            <BottomWrapper>
              {ListTwo.map((item) => {
                const { name, icon } = item;
                return (
                  <>
                    <LogoWrapper>
                      <Logo>{icon}</Logo>
                      <LogoText>
                        <span>{name}</span>
                      </LogoText>
                    </LogoWrapper>
                  </>
                );
              })}
            </BottomWrapper>
          </SideTabWrapper>
        </div>
      </div>
      <div className="hamburger" onClick={handleclick}>
        {click ? (
          <FaTimes style={{ color: "gray" }} size={25} />
        ) : (
          <FaBars style={{ color: "gray" }} size={25} />
        )}
      </div>
    </div>
  );
}

export default ResponsiveInvestorNavbar;
