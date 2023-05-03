import React from "react";
import "./BrowseStreams.css";
import SideBar from "./SideBar.js";
import { allStreams } from "./helpers.js";

function BrowseStreams() {
  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <SideBar />
        <div className="dashBoardMain">
          <div className="dashBoardTitle">Browse Streams</div>
          <div className="allStreamsGrid">
            {allStreams.map((stream) => (
              <div className="cardWrapper">
                <div className="streamCard"></div>
                <div className="streamTextContainer">
                  <div className="streamTitle">{stream.name}</div>
                  <div className="streamSubTitle">Topic: {stream.topic}</div>
                  <div className="streamSubTitle">{stream.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseStreams;
