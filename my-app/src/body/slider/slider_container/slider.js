import React, { useState, useEffect } from "react";
import "../slider styles/slider_layout.css";
import dessert from "../slide_imgs/dessert.jpg";
import dessert2 from "../slide_imgs/dessert2.jpg";
import dessert3 from "../slide_imgs/dessert3.png";
import dessert4 from "../slide_imgs/dessert4.png";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: dessert,
      text: "GIFT & EXPERIENCES",
      text2: "From Michellin-Starred restaurants to Beef Wallington masterclasses",
      text3: "Browse All Gifts"
    },
    {
      image: dessert2,
      text: "ULTIMATE SET",
      text2: "TWO COURSES FROM £17",
      text3: "FIND OUT MORE"
    },
    {
      image: dessert3,
      text: "THE IDOTS SANDWICH IS HERE",
      text2: "INSPIRED BY GORDON'S FAMOUS LINE, TRY OUR NEW SPECIALS!",
      text3: "FIND OUT MORE"
    },
    {
      image: dessert4,
      text: "PRIVATE DINING",
      text2: "INTIMATE DINING EXPERIENCES FOR SPECIAL OCCASIONS",
      text3: "FIND OUT MORE"
    }
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []); // Run only once when component mounts

  return (
    <div className="slider-container">
      <div className="slide-wrapper-container">
        <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="slide" key={`slide${index}`}>
              <img src={slide.image} alt={`Img${index + 1}`} />
              <div>
                <div className="text-container">
                  <h1>{slide.text}</h1> 
                  <h2>{slide.text2}</h2>
                  <a className="label link">{slide.text3}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-controls">
        <button className="control" onClick={prevSlide}>&lt;</button>
        <button className="control" onClick={nextSlide}>&gt;</button>
      </div>
      <div className="dot-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            style={{ backgroundColor: currentSlide === index ? "#ffffff" : "" }}
          />
        ))}
      </div>

    </div>
  );
}

export default Slider;
