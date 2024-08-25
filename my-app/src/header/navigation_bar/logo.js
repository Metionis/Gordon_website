import React from "react";
import "./styles/navigation_bar.css";
import logo from "../header_images/logo.png";

function Logo () {
  return (
    <div className="logo-container">
      <img src={logo} alt="Gordon Ramsey" class="gordon-logo"></img>
    </div>
  );
}

export default Logo;