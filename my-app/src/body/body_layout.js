import React from "react";
import Slider from "./slider/slider_container/slider";
import About from "./about/container/about";
import About2 from "./about2/container/about2";
import FoodsList from "./foods-list/container/FoodsList";

function Body () {
  return (
    <div className="body-container">
      <Slider />
      <About />
      <About2 />
      <FoodsList />
    </div>
  );
}

export default Body;