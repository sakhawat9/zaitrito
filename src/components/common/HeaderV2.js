/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsBag, BsBarChart, BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Banner from "../../assets/images/mega-menu-banner.png";
import Image from "../../assets/images/zairito-home-two.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HeaderV2 = () => {
  return (
    <header className="header-area-v2 hidden lg:block">
      <div className="header-top">
        <div className="container-fluid">
          <div className="header-wrap">
            <div className="header-top-left">
              <p className="contact-info">
                <i className="icon flaticon-phone"></i> Call Us: +777 2345 7885
                (FREE)
              </p>
            </div>
            <div className="top-bar-menu">
              <ul className="menu-list">
                <li className="menu-item">
                  <a className="menu-link" href="#"></a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/aboutUs">
                    About Us
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="faq.html">
                    How To Buy
                  </a>
                </li>
              </ul>
            </div>
            <div className="switcher-lang-currency">
              <div className="currency-switcher">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex items-center w-full text-white">
                      $ Usd
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute border-t-2 border-t-green-600 mt-10 right-0  w-32 shadow-lg bg-white ring-1 ring-black ring-opacity-5  focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-2xl"
                              )}
                            >
                              $ Usd
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-2xl"
                              )}
                            >
                              Rupi
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="lang-switcher">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex items-center w-full text-white">
                      Eng
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute border-t-2 border-t-green-600 mt-10 right-0  w-32 shadow-lg bg-white ring-1 ring-black ring-opacity-5  focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-2xl"
                              )}
                            >
                              Eng
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-2xl"
                              )}
                            >
                              Hin
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="header-wrap">
          <div className="search-area">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  name="search"
                  placeholder="Search Here"
                />
                <button type="button" className="search-btn">
                  <BsSearch />
                </button>
              </div>
            </form>
          </div>

          <div className="brand-logo-area">
            <a href="/" className="brand-logo">
              <img
                className="brand-image"
                src={Image}
                alt="zairito-home-two"
              />
            </a>
          </div>
          <div className="header-right">
            <ul className="btn-list">
              <li className="single-items wishlist-area">
                <a className="single-btn wishlist-btn" href="#">
                  <AiOutlineHeart className="btn-icon w-10 h-10" />
                </a>
              </li>
              <li className="single-items compare-area">
                <a className="single-btn compare-btn" href="#">
                  <BsBarChart className="btn-icon w-10 h-10" />
                </a>
              </li>
              <li className="single-items cart-area">
                <a className="single-btn cart-btn">
                  <BsBag className="btn-icon w-10 h-10" />
                </a>
              </li>
              <li className="single-items user-area">
                <a className="single-btn user-btn" href="/signIn">
                  <BiUserCircle className="btn-icon w-10 h-10" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <nav className="menu-area">
          <ul className="main-menu">
            <li className="menu-item menu-item-has-children">
              <a className="menu-link" href="#">
                Home <MdOutlineKeyboardArrowDown className="arrow-icon" />
              </a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">
                    Home One
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">
                    Home Two
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">
                    Home Three
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item mega-menu-parent active">
              <a className="menu-link" href="#">
                Shop <MdOutlineKeyboardArrowDown className="arrow-icon" />
              </a>
              <div className="mega-menu-area">
                <div className="container mx-auto px-8">
                  <ul className="mega-menu">
                    <li className="mega-menu-item">
                      <a className="mega-menu-title" href="#">
                        Shop Layout
                      </a>
                      <ul className="menu-items">
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="#">
                            Shop Grid Leftsidebar{" "}
                            <span className="menu-item-badge new">New</span>
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="#">
                            Shop Grid Rightsidebar{" "}
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="#">
                            Shop Grid No Sidebar{" "}
                            <span className="menu-item-badge trending">
                              Trending
                            </span>
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="#">
                            Shop List Leftsidebar
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="#">
                            Shop List Rightsidebar
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="#">
                            Shop List No Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-menu-item">
                      <a className="mega-menu-title" href="#">
                        List Layout &amp; Others
                      </a>
                      <ul className="menu-items">
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="#">
                            Product Single 1
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="#">
                            Product Single 2
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="#">
                            Product Single 3
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="/cart">
                            Cart Page
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="/checkout">
                            Checkout Page
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="#">
                            Compare
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="#">
                            Wishlist
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="#">
                            Empty Wishlist
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="mega-menu-item">
                      <a className="mega-menu-banner" href="#">
                        <img
                          className="menu-banner-image"
                          src={Banner}
                          alt="mega-menu-banner"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="menu-item menu-item-has-children">
              <a className="menu-link" href="#">
                Pages <MdOutlineKeyboardArrowDown className="arrow-icon" />
              </a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="/term-conditions">
                    Term &amp; Conditions
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="/privacy-policy">
                    Privacy Policy
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">
                    Shipping &amp; Return
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">
                    Frequently Asked Questions
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">
                    Refund policy
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">
                    Error Page
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="/signIn">
                    Sign In
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">
                    Sign Up
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a className="menu-link" href="/aboutUs">
                about us
              </a>
            </li>
            <li className="menu-item menu-item-has-children">
              <a className="menu-link" href="#">
                Blog <MdOutlineKeyboardArrowDown className="arrow-icon" />
              </a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="/blog">
                    Blog Grid
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="/blog">
                    Blog Single
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a className="menu-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderV2;
