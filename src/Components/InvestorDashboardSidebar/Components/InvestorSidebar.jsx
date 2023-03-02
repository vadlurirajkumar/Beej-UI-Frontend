import React from "react";
import { Link } from "react-router-dom";
import {
  SideBarContainer,
  SideBarButton,
  LogoWrapper,
  Logo,
  LogoText,
  SideTabWrapper,
  TopWrapper,
  BottomWrapper,
} from "./InvestorSidebarStyle";
import {
  DashboardIcon,
  FoundersIcon,
  InvestorsIcon,
  StartupIcon,
  HomePageIcon,
  LogoutIcon,
} from "../../../Assets/icons.jsx";
import "./InvestorSidebar.scss";
// import { useState } from "react";
import BeejLogo from "../../../Assets/beejLogo.png";
import Beej from "../../../Assets/beej.png";

import UserImg from "../../../Assets/InvestorProfile.png";
import { useContext } from "react";
import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";
import {NavLink} from "react-router-dom"
// import {Link} from "react-router-dom";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';




const InvestorSidebar = () => {
  
const {Close, handleSidebarView} = useContext(SideBarContext)

  const ListOne = [
    {
      name: <NavLink to="/investor/dashboard" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "18px" : "16px"}}}>DashBoard</NavLink>,
      icon: <NavLink to="/investor/dashboard" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "18px" : "16px"}}}><DashboardIcon /></NavLink>,

    },
    {
      name: <NavLink to="/investor/investmentdeals" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "14px" : "16px"}}}>Active Investment Deals</NavLink>,
      icon: <NavLink to="/investor/investmentdeals" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}><FoundersIcon /></NavLink>,
    },
    {
      name: <NavLink to="/investor/myportfolio" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}>My Portfolio</NavLink>,
      icon: <NavLink to="/investor/myportfolio" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}><InvestorsIcon /></NavLink>,
    },
    {
      name: <NavLink to="/investor/startupcards" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}>Startups</NavLink>,
      icon: <NavLink to="/investor/startupcards" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}><StartupIcon/></NavLink>,
    },
    // {
    //   name: <NavLink to="/investor/venturepartner" style={({isActive})=>{
    //     return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "18px" : "16px"}}}>Venture Partner</NavLink>,
    //   icon: <NavLink to="/investor/venturepartner" style={({isActive})=>{
    //     return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "18px" : "16px"}}}><HomePageIcon /></NavLink>,
    // },
  ];

  const ListTwo = [
    {
      name: <NavLink to="/login" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}>Logout</NavLink>,
      icon: <NavLink to="/login" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}><LogoutIcon /></NavLink>,
    },
  ];

  return (
    <>
      <div className="investor-dashboard">
        <div className="sidebar" style={{position: 'fixed'}}>
          <SideBarContainer Close={Close}>
            <SideBarButton onClick={handleSidebarView} Close={Close}>
              <KeyboardArrowLeftOutlinedIcon />
            </SideBarButton>
           
            <div className="investor-img-div" style={{width: Close ? "5vw" :"15vw"}} >
            {Close ? (
                 <Link to="/"> <img src={Beej} alt="" style={{ width: "40px" , position:"absolute", left:"10px", top:"6px"}} /></Link>
                ) : (
                 <Link to="/"> <img src={BeejLogo} alt="" /></Link>
                )}
             </div>
             <div className="investor-sideview" style={{backgroundColor: Close ? "transparent" :"#F4F7F3"}}>
            <LogoWrapper className="user-view">
             <Logo className="user-img" style={{width: Close ? "50px" :"80px"}}>
                <img src={UserImg} alt=""  />
              </Logo>
              <LogoText style={{display: Close ? "none" :"block"}}>
                <p ><Link to='/investor/profile' className="investor-profile-name" >Vincent Corter</Link></p>
                <p><Link to='/investor/profile' className="investor-profile-info" >Investor</Link> | <Link to='/founder/profile' className="investor-profile-info"  >Founder</Link></p>  
              </LogoText>
            </LogoWrapper>

            <div className="down-bar">
            <p style={{display: Close ? "none" :"block"}}>Profile Status</p>
            <div className="progress" style={{display: Close ? "none" :"block"}}>
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
                        <LogoText Close={Close}>
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
                        <LogoText Close={Close}>
                          <span>{name}</span>
                        </LogoText>
                      </LogoWrapper>
                    </>
                  );
                })}
              </BottomWrapper>
            </SideTabWrapper>
          </SideBarContainer>
        </div>
      </div>
   
      
    </>
  );
};

export default InvestorSidebar;
