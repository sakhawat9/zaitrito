/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag, BsBarChart } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Zairito from "../../assets/images/zairito.png";

const MobileHeader = () => {
  return (
    <div className="mobile-header-area block lg:hidden">
      <div className="container mx-auto px-8">
        <div className="menu-wrap">
          <div className="header-left">
            <a className="brand-logo" href="/">
              <img
                className="brand-image"
                src={Zairito}
                alt="zairito"
              />
            </a>
          </div>
          <div className="header-right">
            <a href="#" className="wishlist-btn header-btn">
              <div className="btn-left">
                <AiOutlineHeart className="btn-icon" />
                <span className="count">12</span>
              </div>
            </a>
            <a href="#" className="compare-btn header-btn">
              <div className="btn-left">
                <BsBarChart className="btn-icon" />
                <span className="count">5</span>
              </div>
            </a>
            <a
              data-bs-toggle="offcanvas"
              href="#"
              role="button"
              aria-controls="cartOffcanvasSidebar"
              className="cart-btn header-btn"
            >
              <div className="btn-left">
                <BsBag className="btn-icon" />
                <span className="count">10</span>
              </div>
            </a>
            <button className="menu-bar" type="button">
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
