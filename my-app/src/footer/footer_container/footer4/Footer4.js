import React from "react";
import "./style/Footer4.css";

function Footer4 () {
  return (
    <div className="footer4-container">
      <section>
        <div className="footerOpenTable">
          <p className="openTableTitle"></p>
          <a target="_blank" href>
            <p className="openTableText">
              <span className="imgOT"></span>
            </p>
          </a>
        </div>
        <section>
          <div className="item copyright">
            <p>
              <span className="name">Gordon Ramsay Restaurants</span>
            </p>
            <p>©Copyright 2023</p>
            <p>
              <a title="Gordonramsayrestaurants.com" href="https://www.gordonramsayrestaurants.com/" target="_blank">www.gordonramsayrestaurants.com</a>
            </p>
          </div>
          <div className="item chef">
            <p>
            Interested in Gordon Ramsay restaurants?
            <a href="https://www.gordonramsayrestaurants.com/" target="_blank">
            <strong> Click here</strong></a> 
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Footer4;