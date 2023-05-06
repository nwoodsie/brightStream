import React, { useState } from "react";
import "./DashBoard.css";
import "./SettingsPage.css";
import ProfileTab from "./SettingsTabs/ProfileTab.js";

import SideBar from "./SideBar.js";

function SettingsPage() {
  const [settingsTab, setSettingsTab] = useState("Profile");

  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <SideBar />
        <div className="dashBoardMain">
          <div className="dashBoardTitle">Settings</div>
          <div className="settingsContainer">
            <div className="settingsLeft">
              <div
                className={
                  settingsTab === "Profile"
                    ? "settingsLinkSelected"
                    : "settingsLink"
                }
                onClick={() => setSettingsTab("Profile")}
              >
                My Profile
              </div>
              <div
                className={
                  settingsTab === "My Streams"
                    ? "settingsLinkSelected"
                    : "settingsLink"
                }
                onClick={() => setSettingsTab("My Streams")}
              >
                My Streams
              </div>
              <div
                className={
                  settingsTab === "Dolby.io"
                    ? "settingsLinkSelected"
                    : "settingsLink"
                }
                onClick={() => setSettingsTab("Dolby.io")}
              >
                Dolby.io
              </div>
            </div>
            <div className="settingsRight">
              {settingsTab === "Profile" ? (
                <ProfileTab />
              ) : settingsTab === "My Streams" ? (
                <p>My Streams</p>
              ) : (
                <p>Dolby.io</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
