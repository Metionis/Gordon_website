import React from "react";
import Logo from "./logo";
import Listnavigate from "./list_navigate";
import Sticker from "./sticker-container";
import "../global/global.css";

function Navi () {
  return (
    <div className="navigation-bar">
      <div className="Logo-container">
        <Logo />
      </div>
      <div className="list-stick-container">
        <Listnavigate />
        <Sticker />
      </div>
    </div>
  )
}

export default Navi;