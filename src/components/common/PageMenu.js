import React from "react";
import { AiOutlineFileText } from "react-icons/ai";

const PageMenu = () => {
  return (
    <div className="page-menu-wrap">
      <ul className="menu-items">
        <li className="menu-item">
          <a className="menu-link" href="/term-conditions">
            <AiOutlineFileText className="menu-icon far" />
            Term &amp; Conditions
          </a>
        </li>
        <li className="menu-item active">
          <a className="menu-link" href="/privacy-policy">
            <AiOutlineFileText className="menu-icon far" />
            Privacy Policy
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="/shipping-return">
            <AiOutlineFileText className="menu-icon far" />
            Shipping &amp; Return
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="/faq">
            <AiOutlineFileText className="menu-icon far" />
            faq
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="/refund-policy">
            <AiOutlineFileText className="menu-icon far" />
            Refund Policy
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PageMenu;
