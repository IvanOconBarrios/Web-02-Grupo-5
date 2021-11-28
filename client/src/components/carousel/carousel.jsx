import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./carousel.css";

const carousel = () => {
  return (
    <div>
      <Carousel infiniteloop autoplay>
        <div className="image">
          <img src="../images/campesino_0.jpg" alt="" />
        </div>
        <div className="image">
          <img src="../images/campesino_1.jpg" alt="" />
        </div>
        <div className="image">
          <img src="../images/campesino_2.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default carousel;
