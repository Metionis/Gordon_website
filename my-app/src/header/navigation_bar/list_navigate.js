import React from "react";
import "./styles/navigation_bar.css";

function Listnavigate () {
  return (
    <nav role="navigation" className="navi-list">
      <ul>
        <li className="menu-item">ACADEMY</li>
        <li className="menu-item">
          <a className="titile">
            RESTAURANTS & BARS
          </a>
          <i className="dropdown-icon"></i>
          <ul>
            <li className="submenu">
              <a title="UK RESTAURANTS">UK RESTAURANTS</a>
            </li>
            <li className="submenu">
              <a title="US RESTAURANTS">US RESTAURANTS</a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a className="titile">RECIPES</a>
          <i className="dropdown-icon"></i>
          <ul>
            <li className="submenu">
              <a title="CHICKEN RECIPES">CHICKEN RECIPES</a>
            </li>
            <li className="submenu">
              <a title="BEEF RESCIPES">BEEF RESCIPES</a>
            </li>
            <li className="submenu">
              <a titile="VEGETERIAN RECIPES">VEGETERIAN RECIPES</a>
            </li>
            <li className="submenu">
              <a title="ULTIMATE FIT FOOD">ULTIMATE FIT FOOD</a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a title="MASTERCLASSES">MASTERCLASSES</a>
          <i className="dropdown-icon"></i>
          <ul>
            <li className="submenu">THE GORDEN RAMSEY MASTERCLASSES</li>
          </ul>
        </li>
        <li className="menu-item">
          <a className="title">ABOUT GORDON</a>
          <i className="dropdown-icon"></i>
          <ul>
            <li className="submenu">
              <a>GORDEN & TANA RAMSEY FOUNTAIN</a>
            </li>
            <li className="submenu">
              <a>BOOKS</a>
            </li>
            <li className="submenu">
              <a>HEXCLAD</a>
            </li>
            <li className="submenu">
              <a>BY CHEF RAMSAY</a>
            </li>
            <li className="submenu">
              <a>CHEF BLAST</a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a className="TV">TV</a>
          <i className="dropdown-icon"></i>
          <ul>
            <li className="submenu">STUDIO RAMSAY</li>
          </ul>
        </li>
        <li className="menu-item">CAREERS</li>
        <li class="gift-button menu-item">GIFT</li>
      </ul>
    </nav>
  );
}

export default Listnavigate;