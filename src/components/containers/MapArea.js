/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const MapArea = () => {
  return (
    <div className="shop-map-area">
      <div className="shop-info">
        <div className="shop-info-left">
          <h2 className="shop-info-title">Local Pickup Available</h2>
          <p className="shop-info-sub-title">301 Front St Toronto, Canada</p>
          <ul >
            <li>Mon - Fri, 8:30am - 10:30pm,</li>
            <li >Sunday, 8:30am - 10:30pm</li>
          </ul>
        </div>
        <div className="shop-info-right">
          <span className="label">Shops Image</span>
        </div>
      </div>
      <div id="gmap" className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1839.0179632416985!2d89.5538504127622!3d22.801132631062536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff8f2b1098bf95%3A0xbce09c90b98f8380!2sJust%20Orders%20Khulna!5e0!3m2!1sen!2sbd!4v1636005141952!5m2!1sen!2sbd"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MapArea;
