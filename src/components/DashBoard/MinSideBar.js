import React from "react";
import "./MinSideBar.css";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import { Link } from "react-router-dom";

function MinSideBar() {
  return (
    <div className="minsideBarWrapper">
      <div className="minsideBarLogo">

        <FirstPageIcon id="mincollapseIcon" />
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="minsideBarIconWrapper">
          <HomeIcon />
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="minsideBarIconWrapper">
          <VideocamIcon />
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="minsideBarIconWrapper">
          <OndemandVideoIcon />
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="minsideBarIconWrapper">
          <CalendarMonthIcon />
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="minsideBarIconWrapper">
          <SettingsIcon />
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="minprofileWrapper">
        <img src={require("./profilePicture.jpg")} alt="" />

        
          
         
          
        </div>
      </Link>
      
    </div>
  );
}

export default MinSideBar;