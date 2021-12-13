import React from "react";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { BsBarChart, BsHeart } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../assets/images/zairito-home-two.png";

const HeaderMiddle = () => {
  return (
    <div className="header-middle">
      <div className="header-middle__wrapper">
        <div className="header-middle__left">
          <div className="flex header-middle__left__wrapper">
            <BiSearch />
            <input type="text" className="border-0" placeholder="search here" />
          </div>
        </div>
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="header-middle__right">
          <BsHeart />
          <BsBarChart />
          <BiShoppingBag />
          <FaRegUserCircle />
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
