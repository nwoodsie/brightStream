import React from "react";
import "./BrowseStreams.css";
import SideBar from "./SideBar.js";
import { allStreams } from "./helpers.js";
import { useDispatch } from "react-redux";
import { setCurrentStream } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";

function BrowseStreams() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirect = () => navigate("/ViewStream", { replace: true });

  const handleStreamClick = (e) => {
    e.preventDefault();
    dispatch(
      setCurrentStream({
        userId: "cpCF9L",
        streamName: "myStreamName",
      })
    );
    redirect();
  };

  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <SideBar />
        <div className="dashBoardMain">
          <div className="dashBoardTitle">Browse Streams</div>
          <div className="allStreamsGrid">
            {allStreams.map((stream) => (
              <div
                className="cardWrapper"
                onClick={(e) => handleStreamClick(e)}
              >
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
