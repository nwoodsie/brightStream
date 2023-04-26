import React from "react";
import "./DashBoard.css";
import "./ViewStream.css";
import SideBar from "./SideBar.js";
import ViewerStream from "./src/ViewerStream";

function ViewStream() {
  const options = {
    method: "POST",
    headers: { accept: "application/json", "Content-Type": "application/json" },
  };

  fetch(
    "https://comms.api.dolby.io/v2/conferences/mix/conference_id/rtmp/start",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <SideBar />
        <div className="dashBoardMain">
          <div className="dashBoardTitle">View Stream</div>
          <div className="streamContainer">Stuff</div>
        </div>
      </div>
    </div>
  );
}

export default ViewStream;
