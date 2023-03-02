import React from "react";
import {
  SideBarContainer,
  SideBarButton,
  UserWrapper,
  LogoWrapper,
  Logo,
  LogoText,
  SideTabWrapper,
  TopWrapper,
  BottomWrapper,
  ImgDiv
} from "./AdminSidebarStyle";
import {
  DashboardIcon,
  FoundersIcon,
  InvestorsIcon,
  StartupIcon,
  HomePageIcon,
  LogoutIcon,
} from "../../../Assets/icons.jsx";
import "./AdminSidebar.scss";
// import { useState } from "react";
import BeejLogo from "../../../Assets/beejLogo.png";
import Beej from "../../../Assets/beej.png";
// import { FaBars } from "react-icons/fa";
// import BsArrowRightCircle from "react-icons"
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import UserImg from "../../../Assets/user.png";
import { useContext } from "react";
import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";
import {NavLink} from "react-router-dom"
// import {Link} from "react-router-dom";



const AdminSidebar = () => {
  
const {Close,handleSidebarView} = useContext(SideBarContext)

  const ListOne = [
    {
      name: <NavLink to="/admin/dashboard" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "18px" : "16px"}}}>DashBoard</NavLink>,
      icon: <NavLink to="/admin/dashboard" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "18px" : "16px"}}}><DashboardIcon /></NavLink>,

    },
   
    {
      name: <NavLink to="/admin/investor" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}>Investors</NavLink>,
      icon: <NavLink to="/admin/investor" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}><InvestorsIcon /></NavLink>,
    },
    {
      name: <NavLink to="/admin/founder" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}>Founder</NavLink>,
      icon: <NavLink to="/admin/founder" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}><FoundersIcon /></NavLink>,
    },
    {
      name: <NavLink to="/admin/startup" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}>Startups</NavLink>,
      icon: <NavLink to="/admin/startup" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}><StartupIcon/></NavLink>,
    },
    {
      name: <NavLink to="/admin/home/herosection" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "18px" : "16px"}}}>HomePage</NavLink>,
      icon: <NavLink to="/admin/home/herosection" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "18px" : "16px"}}}><HomePageIcon /></NavLink>,
    },
  ];

  const ListTwo = [
    {
      name: <NavLink to="/login" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}>Logout</NavLink>,
      icon: <NavLink to="/login" style={({isActive})=>{
        return{color: isActive ? "#023122" : "",fontWeight: isActive ? "bolder" : "500",font: isActive ? "20px" : "18px"}}}><LogoutIcon /></NavLink>,
    },
  ];

  // const sidebarWidth = {

  //   // width: `${Close ? '5vw' : '15vw' }`,

  //   '@media (max-width:500px)' :{

  //     display:"none"
  //   }
   
  // }


  return (
    <>
      <div className="dashboard">
        <div className="sidebar" style={{position: 'fixed'}}>
          <SideBarContainer Close={Close}>
            
            {/* <LogoWrapper>cld
              <Logo>
                {Close ? (
                  <img src={Beej} alt="" style={{ width: "40px" }} />
                ) : (
                  <img src={BeejLogo} alt=""/>
                )}
              </Logo>
            </LogoWrapper> */}
            {/* <div className="img-div" style={{width: Close ? "5vw" :"15vw"}} > */}
            <ImgDiv >
            {Close ? (
                  <img src={Beej} alt="" style={{ width: "40px" , position:"absolute", left:"10px", top:"6px"}} />
                ) : (
                  <img src={BeejLogo} alt="" style={{height:"7vh"}}/>
                )}
            </ImgDiv>

            <SideBarButton onClick={handleSidebarView} Close={Close}>
            <KeyboardArrowLeftOutlinedIcon/>
            </SideBarButton>
            <UserWrapper style={{backgroundColor: Close ? "transparent" : "#f8f8f8"}}>
              <Logo className="user-img" style={{width: Close ? "50px" :"70px"}}>
                <img src={UserImg} alt=""  style={{width:"100%"}}/>
              </Logo>
              <LogoText>
                <h4 className="admin-name">Admin 03</h4>
                <p className="admin-user">Pro User</p>
              </LogoText>
            </UserWrapper>
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

export default AdminSidebar;
