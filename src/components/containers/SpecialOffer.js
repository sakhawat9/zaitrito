/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Image1 from "../../assets/images/line-shape-one.png";
import Image3 from "../../assets/images/line-shape-two.png";
import Image2 from "../../assets/images/offer-image.png";

const SpecialOffer = () => {
  return (
    <div class="special-offer-area section-padding-secondary-b section-padding-t">
      <div class="special-offer">
        <div class="special-offer__wrapper">
          <img
            class="special-offer__wrapper__line-shape-one"
            src={Image1}
            alt="shape"
          />
          <img
            class="special-offer__wrapper__line-shape-two"
            src={Image3}
            alt="shape"
          />
          <div class="offers">
            <div class="lg:col-span-5">
              <div class="offers__image">
                <img
                  class="thumbnail-image"
                  src={Image2}
                  alt="offer-image"
                />
              </div>
            </div>
            <div class="lg:col-span-7">
              <div>
                <h3 class="offers__text">Spectial Offer</h3>
                <h2 class="offers__category">
                  <span class="offers__category__color">Fashion</span> SALE
                </h2>
                <h3 class="offers__category__offer">50%OFF</h3>
                <a href="#" class="offers__btn">
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
