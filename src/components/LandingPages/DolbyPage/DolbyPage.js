import React from "react";
import "./DolbyPage.css";
import { DefaultButton } from "../../index.js";

const Dolbytext =
  "The Dolby.io Streaming REST API allows remote management of your Dolby.io Real-time Streaming account. To enable remote access you must first use the Token system to securely authenticate your applications with Dolby.io Real-time Streaming. o acquire an API Token, log into your Dolby.io Real-time Streaming account and create an API Secret to be verified as a user, otherwise all API calls will be rejected.";

function DolbyPage() {
  return (
    <div className="dolbyWrapper">
      <div className="dolbyContainer">
        <div className="dolbyLeft">
          <div className="dolbyTitle">
            Powered by <br /> Dolby.io
          </div>
          <div className="dolbyText">{Dolbytext}</div>
          <div className="dolbybuttonContainer">
            <DefaultButton text="Get started" size="Big" />
          </div>
        </div>
        <div className="dolbyRight">
          <img src={require("./DolbyPageImage.png")} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default DolbyPage;
