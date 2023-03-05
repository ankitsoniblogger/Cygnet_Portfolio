import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">Lorem ipsum dolor sit amet.</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
