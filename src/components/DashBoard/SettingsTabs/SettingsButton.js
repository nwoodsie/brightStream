import React from "react";
import "./SettingsButton.css";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

function SettingsButton({ text }) {
  const Icons = {
    Edit: EditIcon,
    Add: AddIcon,
  };

  const IconToRender = Icons[text];

  return (
    <div className="settingsButtonContainer">
      {text}
      <IconToRender />
    </div>
  );
}

export default SettingsButton;
