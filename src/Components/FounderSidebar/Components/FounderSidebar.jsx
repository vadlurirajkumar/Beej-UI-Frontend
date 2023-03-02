import React from "react";
import {
  SideBarContainer,
  SideBarButton,
  LogoWrapper,
  Logo,
  LogoText,
  SideTabWrapper,
  TopWrapper,
  BottomWrapper,
  Navbar
} from "./FounderSidebarStyle";
import {
  DashboardIcon,
  
  InvestorsIcon,
  StartupIcon,
 
  LogoutIcon,
} from "../../../Assets/icons.jsx";
import "./FounderSidebar.scss";
// import { useState } from "react";
import Blog from "../../../Assets/beejLogo.png";
import Beej from "../../../Assets/beej.png";
// import { FaBars } from "react-icons/fa";
import UserImg from "../../../Assets/user.png";
import {useState, useContext } from "react";
import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";
import {NavLink} from "react-router-dom"
// import { Line } from "recharts";
import {Link} from "react-router-dom";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import Model from '../../Model/Model';




const FounderSidebar = () => {
  
const {Close,handleSidebarView} = useContext(SideBarContext)
const[model,setModel]=useState(false);
const handclick=()=>{
   setModel(!model);

}


  const ListOne = [
    {
      name: <NavLink to="/founder/dashboard" style={({isActive})=>{
        return{color: isActive ? "#0A3E2F" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "18px" : "16px"}}}>DashBoard</NavLink>,
      icon: <NavLink to="/founder/dashboard" style={({isActive})=>{
        return{color: isActive ? "#0A3E2F" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "18px" : "16px"}}}><DashboardIcon /></NavLink>,

    },
    {
        name: <NavLink to="/founder/mystartup" style={({isActive})=>{
          return{color: isActive ? "#0A3E2F" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}>MY Startups</NavLink>,
        icon: <NavLink to="/founder/mystartup" style={({isActive})=>{
          return{color: isActive ? "#0A3E2F" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}><StartupIcon/></NavLink>,
      },
  
    {
      name: <NavLink to="/founder/financial" style={({isActive})=>{
        return{color: isActive ? "#0A3E2F" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}>Financial</NavLink>,
      icon: <NavLink to="/founder/financial" style={({isActive})=>{
        return{color: isActive ? "#0A3E2F" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}><InvestorsIcon /></NavLink>,
    },
   
   
  ];

  const ListTwo = [
    {
      name: <NavLink to="/login" style={({isActive})=>{
        return{color: isActive ? "#0A3E2F" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}>Logout</NavLink>,
      icon: <NavLink to="/login" style={({isActive})=>{
        return{color: isActive ? "#0A3E2F" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}><LogoutIcon /></NavLink>,
    },
  ];

  return (
    <>
      <div className="Founder-dashboard">
        <div className="sidebar" style={{position: 'fixed'}}>
          <SideBarContainer Close={Close}>
            <SideBarButton onClick={handleSidebarView} Close={Close}>
              <KeyboardArrowLeftOutlinedIcon />
            </SideBarButton>
           
            <div className="img-div" style={{width: Close ? "5vw" :"15vw"}} >
            {Close ? (
              <Link to="/"><img src={Beej} alt=""   id="beejimg" style={{ width: "40px"}}/></Link> 
                ) : (
                 <Link to="/"><img src={Blog} alt=""/></Link> 
                )}
            </div>
            <div className="FounderSide">
            <div className="investor-sideview" style={{backgroundColor: Close ? "transparent" :"#FFFFF"}}>
            <LogoWrapper className="user-view">
             <Logo className="user-img" style={{width: Close ? "50px" :"80px"}}>
                <img src={UserImg} alt=""  />
              </Logo>
              <LogoText style={{display: Close ? "none" :"block"}}>
                <p ><Link to='/founder/profile'>John_Deo</Link></p>
                <p><Link onClick={handclick} style={{ fontSize: "14px", fontWeight: 'bold' }}>Switch profile</Link> </p>
                {/* {
        model && <Model model={model} handclick={handclick}/>
    } */}
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
            </div>
          </SideBarContainer>
        </div>
      </div>
   
      
    </>
  );
};

export default FounderSidebar;