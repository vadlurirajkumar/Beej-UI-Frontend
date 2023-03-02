import React from "react";
import "./HomeSidebar.scss";
import { NavLink } from "react-router-dom";

const HomeSidebar = () => {
  return (
    <>
      <div className="home-sidebar-menu">
        <NavLink
          to="/admin/home/herosection"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "#1A1A1AD1",
              fontWeight: isActive ? "bold" : "500",
            };
          }}
        >
          Hero Section
        </NavLink>

        <NavLink
          to="/admin/home/community"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "#1A1A1AD1",
              fontWeight: isActive ? "bold" : "500",
            };
          }}
        >
          Community & <br /> Business Engagement
        </NavLink>

        <NavLink
          to="/admin/home/featured-investor-founder"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "#1A1A1AD1",
              fontWeight: isActive ? "bold" : "500",
            };
          }}
        >
          Featured Investors & <br /> Featured Founders
        </NavLink>

        <NavLink
          to="/admin/home/deals"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "#1A1A1AD1",
              fontWeight: isActive ? "bold" : "500",
            };
          }}
        >
          Deals
        </NavLink>

        <NavLink
          to="/admin/home/joinourevents"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "#1A1A1AD1",
              fontWeight: isActive ? "bold" : "500",
            };
          }}
        >
          Join Our Events
        </NavLink>

        <NavLink
          to="/admin/home/aboutus"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "#1A1A1AD1",
              fontWeight: isActive ? "bold" : "500",
            };
          }}
        >
          About Us
        </NavLink>

        <NavLink
          to="/admin/home/testimonials"
          style={({ isActive }) => {
            return {
              color: isActive ? "#023122" : "#1A1A1AD1",
              fontWeight: isActive ? "bold" : "500",
            };
          }}
        >
          Testimonials
        </NavLink>
      </div>
    </>
  );
};

export default HomeSidebar;
