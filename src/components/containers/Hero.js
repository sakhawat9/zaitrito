/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import heroImage from "../../assets/images/hero-slider-v2-image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__banner">
          <div className="">
            <h1>Exclusive Summer Sale Is Going On Zairito The Shopify</h1>
            <p>
              Curabitur non nulla sit amet nisl tempus convallis quis lectus.
              porttitor lectus nibh. Curabitur arcu erat, accu msan id imperdiet
              et, porttitor at. Cras ultricies ligula sed magna dictum porta.
              Donec rutrum congue eget malesuaa. Lorem
            </p>
            <div className="hero__banner__btn">
              <a href="#" className="">
                See Colections <BsArrowRight />
              </a>
            </div>
          </div>
          <div>
            <img src={heroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
