/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Image1 from "../../assets/images/line-shape-one.png";
import Image3 from "../../assets/images/line-shape-two.png";
import Image2 from "../../assets/images/offer-image.png";

const SpecialOffer = () => {
  return (
    <div className="special-offer-area section-padding-t">
      <div className="special-offer">
        <div className="special-offer__wrapper">
          <img
            className="special-offer__wrapper__line-shape-one"
            src={Image1}
            alt="shape"
          />
          <img
            className="special-offer__wrapper__line-shape-two"
            src={Image3}
            alt="shape"
          />
          <div className="offers">
            <div className="lg:col-span-5">
              <div className="offers__image">
                <img
                  className="thumbnail-image"
                  src={Image2}
                  alt="offer-image"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div>
                <h3 className="offers__text">Spectial Offer</h3>
                <h2 className="offers__category">
                  <span className="offers__category__color">Fashion</span> SALE
                </h2>
                <h3 className="offers__category__offer">50%OFF</h3>
                <a href="#" className="offers__btn">
                  Shop Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
