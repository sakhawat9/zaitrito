/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const SingleDetailsSubHeader = () => {
  return (
    <div className="singleDetailsSubHeader">
      <div className="container px-8 mx-auto">
        <div className="text-center">
          <ul>
            <li className="page-item">
              <a className="page-item-link" href="#">
                Home
              </a>
            </li>
            <li className="page-item">
              <a className="page-item-link" href="#">
                Products
              </a>
            </li>
            <li className="page-item">Product Single Page</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleDetailsSubHeader;
