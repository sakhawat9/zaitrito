import React from "react";
import EmptyBox from "../../assets/images/empty-box.png";

const EmptyWishList = () => {
  return (
    <div className="empty-wish-list section-padding">
      <div className="container">
        <div className="empty-box-wrap text-center">
          <div className="flex justify-center">
            <img className="empty-box-img" src={EmptyBox} alt="empty-box" />
          </div>
          <h2 className="empty-box-title">Your Wish List Is Empty</h2>
          <p className="empty-box-content">
            Nulla porttitor accumsan tincidunt Sed porttitor lectus nibh. Nulla
            quis lorem
          </p>
          <a href="shop-grid-left-sidebar.html" className="primary-btn">
            Add Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmptyWishList;
