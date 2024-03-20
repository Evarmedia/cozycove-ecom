// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>123</h3>
      </div>
      <div>
        <h3>4-5-6</h3>
      </div>
      <div>
        <h3>7-8-9</h3>
      </div>
      <div>
        <h3>10-11-12</h3>
      </div>
      <div>
        <h3>13-14-15</h3>
      </div>
      <div>
        <h3>16-17-18</h3>
      </div>
    </Slider>
  );
}