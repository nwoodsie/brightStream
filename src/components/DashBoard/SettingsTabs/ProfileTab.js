import React from "react";
import "./ProfileTab.css";
import SettingsButton from "./SettingsButton.js";

function ProfileTab() {
  return (
    <>
      <div className="personalContainer">
        <div className="personalInformationSection">
          <div className="personalInformationTitle">Personal Information</div>
          <SettingsButton text="Edit" />
        </div>
        <div className="personalInformationSection">
          <div className="personalInformationBottomLeft">
            <img src={require("./../profilePicture.jpg")} alt="" />
          </div>
          <div className="personalInformationBottomRight">
            <div className="personalInformationText">Name: Noah Woods</div>
            <div className="personalInformationText">
              Email: noahnwoods@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="streamingContainer">
        <div className="personalInformationSection">
          <div className="personalInformationTitle">Streaming Set-Up</div>
          <SettingsButton text="Add" />
        </div>
        <form>
          <div className="formWrapper">
            <div className="streamingInfoBlock">
              <label className="inputLabel">Dolby Stream ID:</label>
              <input
                className="inputBox"
                type="text"
                id="email"
                required
                value={"email"}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <label className="inputLabel">Dolby Stream Name:</label>
              <input
                className="inputBox"
                type="password"
                id="password"
                required
                value={"password"}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="streamingInfoBlock">
              <label className="inputLabel">Display Name:</label>
              <input
                className="inputBox"
                type="text"
                required
                value={"email"}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <label className="inputLabel">Stream Name:</label>
              <input
                className="inputBox"
                type="password"
                id="password"
                required
                value={"password"}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileTab;
