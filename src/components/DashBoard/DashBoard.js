import React from "react";
import "./DashBoard.css";
import MinSideBar from "./MinSideBar.js";


function DashBoard() {
  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <MinSideBar />
        <div className="dashBoardMain">
          <div className="dashBoardTitle">DashBoard</div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
