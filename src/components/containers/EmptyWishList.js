import React from "react";
import EmptyBox from "../../assets/images/empty-box.png";

const EmptyWishList = () => {
  return (
    <div class="empty-wish-list section-padding">
      <div class="container">
        <div class="empty-box-wrap text-center">
          <div className="flex justify-center">
            <img class="empty-box-img" src={EmptyBox} alt="empty-box" />
          </div>
          <h2 class="empty-box-title">Your Wish List Is Empty</h2>
          <p class="empty-box-content">
            Nulla porttitor accumsan tincidunt Sed porttitor lectus nibh. Nulla
            quis lorem
          </p>
          <a href="shop-grid-left-sidebar.html" class="primary-btn">
            Add Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmptyWishList;
