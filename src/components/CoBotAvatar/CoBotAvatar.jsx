import React from "react";

import BotAvatar from "./Asset8.png";
import './CoBotAvatar.css'

const CoBotAvatar = () => {
  return (
      <div
        className="avatar-icon-nora">
        <img className="nora-icon" alt="BotAvatar" src={BotAvatar} />
      </div>
  );
};

export default CoBotAvatar;