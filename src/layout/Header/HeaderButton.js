/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const HeaderButton = () => {
  return (
    <div className="flex justify-center mb-4 border-b border-b-gray-100 header-button">
      <ul className="flex">
        <li className=" hoverable">
          <a
            href="#"
            className="relative flex items-center block px-4 py-6 lg:p-6"
          >
            Home <MdOutlineKeyboardArrowDown />
          </a>
          <div className="p-6 mb-16 bg-white shadow-xl mega-menu sm:mb-0">
            <div className="mx-2">
              <ul className="">
                <li>Home One</li>
                <li>Home Two</li>
                <li>Home There</li>
              </ul>
            </div>
          </div>
        </li>
        <li className="hoverable">
          <a
            href="#"
            className="relative flex items-center block px-4 py-6 lg:p-6 "
          >
            Shop <MdOutlineKeyboardArrowDown />
          </a>
          <div className="p-6 mb-16 bg-white shadow-xl mega-menu sm:mb-0">
            <div className="container flex flex-wrap justify-between w-full mx-2 mx-auto">
              <ul className="w-full px-4 pt-6 pb-6 sm:w-1/2 lg:w-1/4 lg:pt-3">
                <div className="">
                  <h3 className="mb-2 text-xl text-bold">Heading 1</h3>
                </div>
              </ul>
              <ul className="w-full px-4 pt-6 pb-6 sm:w-1/2 lg:w-1/4 lg:pt-3">
                <div className="">
                  <h3 className="mb-2 text-xl text-bold">Heading 2</h3>
                </div>
              </ul>
              <ul className="w-full px-4 pt-6 pb-6 sm:w-1/2 lg:w-1/4 lg:pt-3">
                <div className="">
                  <h3 className="mb-2 text-xl text-bold">Heading 3</h3>
                </div>
              </ul>
              <ul className="w-full px-4 pt-6 pb-6 sm:w-1/2 lg:w-1/4 lg:pt-3">
                <div className="">
                  <h3 className="mb-2 text-xl text-bold">Heading 4</h3>
                </div>
              </ul>
            </div>
          </div>
        </li>
        <li className="hoverable">
          <a
            href="#"
            className="relative flex items-center block px-4 py-6 lg:p-6 "
          >
            Pages <MdOutlineKeyboardArrowDown />
          </a>
          <div className="p-6 mb-16 bg-white shadow-xl mega-menu sm:mb-0">
            <div className="container flex flex-wrap justify-between w-full mx-2 mx-auto">
              <ul className="w-full px-4 pt-6 pb-6 sm:w-1/2 lg:w-1/4 lg:pt-3">
                <div className="">
                  <h3 className="mb-2 text-xl text-bold">Heading 1</h3>
                </div>
              </ul>
              <ul className="w-full px-4 pt-6 pb-6 sm:w-1/2 lg:w-1/4 lg:pt-3">
                <div className="">
                  <h3 className="mb-2 text-xl text-bold">Heading 2</h3>
                </div>
              </ul>
              <ul className="w-full px-4 pt-6 pb-6 sm:w-1/2 lg:w-1/4 lg:pt-3">
                <div className="">
                  <h3 className="mb-2 text-xl text-bold">Heading 3</h3>
                </div>
              </ul>
              <ul className="w-full px-4 pt-6 pb-6 sm:w-1/2 lg:w-1/4 lg:pt-3">
                <div className="">
                  <h3 className="mb-2 text-xl text-bold">Heading 4</h3>
                </div>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a className="relative block px-4 py-6 lg:p-6" href="#">
            About Us
          </a>
        </li>
        <li className="hoverable">
          <a
            href="#"
            className="relative flex items-center block px-4 py-6 lg:p-6 "
          >
            Blog <MdOutlineKeyboardArrowDown />
          </a>
          <div className="p-6 mb-16 bg-white shadow-xl mega-menu sm:mb-0">
            <div className="container flex flex-wrap justify-between w-full mx-2 mx-auto">
              <ul className="w-full px-4 pt-6 pb-6 sm:w-1/2 lg:w-1/4 lg:pt-3">
                <div className="">
                  <h3 className="mb-2 text-xl text-bold">Heading 2</h3>
                </div>
              </ul>
              <ul className="w-full px-4 pt-6 pb-6 sm:w-1/2 lg:w-1/4 lg:pt-3">
                <div className="">
                  <h3 className="mb-2 text-xl text-bold">Heading 3</h3>
                </div>
              </ul>
              <ul className="w-full px-4 pt-6 pb-6 sm:w-1/2 lg:w-1/4 lg:pt-3">
                <div className="">
                  <h3 className="mb-2 text-xl text-bold">Heading 4</h3>
                </div>
              </ul>
              <ul className="w-full px-4 pt-6 pb-6 sm:w-1/2 lg:w-1/4 lg:pt-3">
                <div className="">
                  <h3 className="mb-2 text-xl text-bold">Heading 1</h3>
                </div>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a className="relative block px-4 py-6 lg:p-6">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderButton;
