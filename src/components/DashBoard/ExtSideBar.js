import React from "react";
import "./ExtSideBar.css";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";

function ExtSideBar() {
  return (
    <div className="extsideBarWrapper">
      <div className="extsideBarLogo">
        <MenuBookTwoToneIcon />
        <FirstPageIcon id="collapseIcon" />
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="extsideBarIconWrapper">
          <HomeIcon />
          <p>Home</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="extsideBarIconWrapper">
          <VideocamIcon />
          <p>Classroom</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="extsideBarIconWrapper">
          <OndemandVideoIcon />
          <p>Browse</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="extsideBarIconWrapper">
          <CalendarMonthIcon />
          <p>Schedule</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="extsideBarIconWrapper">
          <SettingsIcon />
          <p>Settings</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="extprofileWrapper">
        <img src={require("./profilePicture.jpg")} alt="" />
        <p>   profile</p>
        
          
         
          
        </div>
      </Link>
      
    </div>
  );
}

export default ExtSideBar;