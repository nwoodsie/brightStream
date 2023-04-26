import React from "react";
import "./DashBoard.css";
import "./ViewStream.css";
import SideBar from "./SideBar.js";
import Publisher from "./Publisher/Publisher.tsx";

function ViewStream() {
  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <SideBar />
        <div className="dashBoardMain">
          <div className="dashBoardTitle">View Stream</div>
          <div className="streamContainer">
            <Publisher />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStream;
