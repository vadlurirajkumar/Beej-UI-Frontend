import React, { useState } from 'react'
import "./Responsivefoundernavbar.scss"
import img from "../../Assets/beejLogo.png"
import UserImg from "../../Assets/user.png";
import {
    DashboardIcon,
    
    InvestorsIcon,
    StartupIcon,
   
    LogoutIcon,
  } from "../../Assets/icons.jsx";
  import {Link} from "react-router-dom";
  import {FaTimes, FaBars} from "react-icons/fa"
  import {
    SideBarContainer,
    SideBarButton,
    LogoWrapper,
    Logo,
    LogoText,
    SideTabWrapper,
    TopWrapper,
    BottomWrapper,
  } from "../FounderSidebar/Components/FounderSidebarStyle";
  import {NavLink} from "react-router-dom"


function ResponsiveFounderNavbar() {

  const [click, setClick]= useState(false)

  const handleclick=()=>{
    setClick(!click)
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
    <div className='ResponsiveFounderNavbar' style={{position:"fixed"}}>
        <div className='image'>
           <Link to="/"> <img src={img}/></Link>
        </div>
        <div className={click ? "menu active" : "menu"}>
        <div className="FounderSide">
            <div className="investor-sideview" >
            <LogoWrapper className="user-view">
             <Logo className="user-img">
                <img src={UserImg} alt=""  />
              </Logo>
              <LogoText>
                <p ><Link to='/founder/profile'>John_Deo</Link></p>
                <p><Link to='/investor/profile' style={{ fontSize: "14px", fontWeight: 'bold' }}>Investor</Link> | <Link to='/founder/profile' style={{ fontSize: "14px", fontWeight: 'bold' }}>Founder</Link></p>  
              </LogoText>
            </LogoWrapper>

            <div className="down-bar">
            <p >Profile Status</p>
            <div className="progress" >
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
                        <LogoText >
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
        <div className='hamburger' onClick={handleclick}>
        {click ? (
          <FaTimes style={{color:"gray"}} size={25}/>
        ):(
            <FaBars style={{color:"gray"}} size={25}/>
        )
        }
        </div>
    </div>
  )
}

export default ResponsiveFounderNavbar