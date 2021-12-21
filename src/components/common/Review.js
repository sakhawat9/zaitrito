import React from "react";
import { AiFillStar } from "react-icons/ai";

const Review = ({ review }) => {
  return (
    <div>
      <div className="single-review">
        <div className="reviewer">
          <div className="reviewer-wrap">
            <img
              className="reviewer-image"
              src={review?.img}
              alt={review?.name}
            />
            <div className="reviewer-info">
              <h4 className="reviewer-name">{review?.name}</h4>
              <h4 className="review-meta">
                <span className="time">{review?.date}</span>
              </h4>
            </div>
          </div>
          <ul className="review-list">
            <li className="review-item active">
              <AiFillStar />
            </li>
            <li className="review-item active">
              <AiFillStar />
            </li>
            <li className="review-item active">
              <AiFillStar />
            </li>
            <li className="review-item active">
              <AiFillStar />
            </li>
            <li className="review-item">
              <AiFillStar />
            </li>
          </ul>
        </div>
        <p className="review-text">{review?.desc}</p>
      </div>
    </div>
  );
};

export default Review;
