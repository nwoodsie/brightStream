import React from "react";
import "./DashBoard.css";
import SideBarNew from "./SideBarNew.js";


function DashBoard() {
  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <SideBarNew />
        <div className="dashBoardMain">
          <div className="dashBoardTitle">DashBoard</div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
