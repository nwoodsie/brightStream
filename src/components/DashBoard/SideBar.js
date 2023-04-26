import React from "react";
import "./SideBar.css";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sideBarWrapper">
      <div className="sideBarLogo">
        <MenuBookTwoToneIcon />
        <FirstPageIcon id="collapseIcon" />
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sideBarIconWrapper">
          <HomeIcon />
          <p>Home</p>
        </div>
      </Link>
      <Link to="/HostStream" style={{ textDecoration: "none" }}>
        <div className="sideBarIconWrapper">
          <VideocamIcon />
          <p>Classroom</p>
        </div>
      </Link>
      <Link to="/ViewStream" style={{ textDecoration: "none" }}>
        <div className="sideBarIconWrapper">
          <OndemandVideoIcon />
          <p>Browse</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sideBarIconWrapper">
          <CalendarMonthIcon />
          <p>Schedule</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sideBarIconWrapper">
          <SettingsIcon />
          <p>Settings</p>
        </div>
      </Link>
      <div className="profileWrapper">
        <img src={require("./profilePicture.jpg")} alt="" />
      </div>
    </div>
  );
}

export default SideBar;
