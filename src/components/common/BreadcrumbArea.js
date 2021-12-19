import React from "react";

const BreadcrumbArea = () => {
  return (
    <div className="breadcrumb-area">
      <div className="container mx-auto px-8">
        <div className="breadcrumb-wrap text-center">
          <h2>Product Collections</h2>
          <ul>
            <li className="page-item">
              <a href="#">
                Home
              </a>
            </li>
            <li className="page-item">Product Collections</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbArea;
