/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const MobileMenu = () => {
  return (
    <div className="p-4">
      <a href="/" className="text-xl">
        Zairito
      </a>

      <ul className="mobile-menu">
        <li>
          <a href="/courses">
            <a>Courses</a>
          </a>
        </li>
        <li>
          <a href="/instractors">
            <a>Instractors</a>
          </a>
        </li>
        <li>
          <a href="/categories">
            <a>Categories</a>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
