/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";
import Engmenu from "../Engmenu";
import MobileMenu from "../MobileMenu";
import Udsmenue from "../Udsmenu";

const HeaderTop = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <span className="header__wrapper__logo">
          <a href="#" className="">
            <IoIosCall className="" />
            <Link to="tel:+777 2345 7885">Call Us: +777 2345 7885 (FREE)</Link>
          </a>
        </span>

        <button
          className="inline-block text-3xl lg:hidden"
          onClick={toggleDrawer}
        >
          <FiMenu />
        </button>
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          <div onClick={toggleDrawer} className="header__wrapper__dower close">
            <AiOutlineCloseSquare className="float-right" />
          </div>
          <MobileMenu />
        </Drawer>

        <nav className="flex flex-wrap items-center justify-center hidden md:ml-auto md:mr-auto lg:block">
          <a href="#" className="mr-12 hover:text-gray-900">
            About Us
          </a>
          <a href="#" className="mr-12 hover:text-gray-900">
            Blog
          </a>
          <a href="#" className="mr-12 hover:text-gray-900">
            How To Buy
          </a>
        </nav>

        <nav className="flex">
          <a href="#" className="flex items-center mr-12 hover:text-gray-900">
            <Udsmenue />
          </a>
          <a href="#" className="flex items-center hover:text-gray-900">
            <Engmenu />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderTop;
