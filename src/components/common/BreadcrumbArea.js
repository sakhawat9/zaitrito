import React from "react";

const BreadcrumbArea = ({title}) => {
  return (
    <div className="breadcrumb-area">
      <div className="container mx-auto px-8">
        <div className="breadcrumb-wrap text-center">
          <h2>{title}</h2>
          <ul>
            <li className="page-item">
              <a href="/">
                Home
              </a>
            </li>
            <li className="page-item">{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbArea;
