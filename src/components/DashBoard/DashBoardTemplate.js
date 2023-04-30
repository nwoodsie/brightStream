import React from "react";
import "./DashBoard.css";
import SideBar from "./MinSideBar.js";

function DashBoard() {
  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <SideBar />
        <div className="dashBoardMain">
          <div className="dashBoardTitle">DashBoard</div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
