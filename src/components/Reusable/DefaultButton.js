import React from "react";
import "./DefaultButton.css";

function DefaultButton({ text, size = "Small", onClick }) {
  return (
    <div className={`buttonWrapper${size}`} onClick={onClick}>
      <div className={`buttonText${size}`}>{text}</div>
    </div>
  );
}

export default DefaultButton;
