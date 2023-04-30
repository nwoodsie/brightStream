import React from "react";
import "./MiniSideBar.css";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";

function MiniSideBar() {
  return (
    <div className="msideBarWrapper">
      <div className="msideBarLogo">
        <MenuBookTwoToneIcon />
        <FirstPageIcon id="mcollapseIcon" />
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="msideBarIconWrapper">
          <HomeIcon />
          <p>Home</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="msideBarIconWrapper">
          <VideocamIcon />
          <p>Classroom</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="msideBarIconWrapper">
          <OndemandVideoIcon />
          <p>Browse</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="msideBarIconWrapper">
          <CalendarMonthIcon />
          <p>Schedule</p>
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="msideBarIconWrapper">
          <SettingsIcon />
          <p>Settings</p>
        </div>
      </Link>
      <div className="mprofileWrapper">
        <img src={require("./profilePicture.jpg")} alt="" />
      </div>
    </div>
  );
}

export default MiniSideBar;
