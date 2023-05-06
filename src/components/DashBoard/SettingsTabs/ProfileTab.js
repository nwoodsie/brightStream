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
        <div className="loginForm">
          <label className="loginLabel" id="emailLabel">
            Email:
          </label>
          <input className="loginInput" type="text" id="email" />
        </div>
        <div>
          <label className="loginLabel" id="passwordLabel">
            Password:
          </label>
          <input className="loginInput" type="password" id="password" />
        </div>
      </div>
    </>
  );
}

export default ProfileTab;
