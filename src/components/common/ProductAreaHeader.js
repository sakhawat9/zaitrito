/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsBag, BsBarChart, BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import India from "../../assets/images/india.png";
import Banner from "../../assets/images/mega-menu-banner.png";
import UnitedState from "../../assets/images/united-states.png";
import Zairito from "../../assets/images/zairito.png";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductAreaHeader = () => {
  return (
    <header className="header-area hidden lg:block">
      <div className="header-top">
        <div className="container mx-auto px-8">
          <div className="grid gap-4 grid-cols-12 align-items-center">
            <div className="lg:col-span-4">
              <div className="header-top-left">
                <p className="contact-info">
                  <i className="icon flaticon-phone"></i> Call Us: +777 2345
                  7885 (FREE)
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="header-top-right">
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
                      <a className="menu-link" href="#">
                        Blog
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="#" href="#">
                        How To Buy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="switcher-lang-currency">
                  <div className="currency-switcher">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="flex items-center w-full">
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
                        <Menu.Button className="flex items-center w-full">
                          <img src={UnitedState} alt="united-states" />
                          <a className="lang-text ml-4" href="#">
                            Hin
                          </a>
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
                                    "block px-4 flex py-2 text-2xl"
                                  )}
                                >
                                  <img src={UnitedState} alt="united-states" />
                                  <a className="lang-text ml-4" href="#">
                                    Hin
                                  </a>
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
                                    "block px-4 py-2 flex text-2xl"
                                  )}
                                >
                                  <img src={India} alt="india" />
                                  <a className="lang-text ml-4" href="#">
                                    Hin
                                  </a>
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <a className="account-btn" href="/signIn">
                  <BiUserCircle className="user-icon" /> My Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container mx-auto px-8">
          <div className="header-middle-wrap">
            <div className="brand-area">
              <a className="#" href="/">
                <img className="brand-image" src={Zairito} alt="zairito" />
              </a>
            </div>
            <div className="search-area">
              <form>
                <div className="search-wrap">
                  <select className="form-select">
                    <option selected="">Category</option>
                    <option value="1">Health &amp; Beauty</option>
                    <option value="2">Women's Fashion</option>
                    <option value="3">Men's Fashion</option>
                    <option value="4">Electronic</option>
                    <option value="5">Sports </option>
                  </select>
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
                </div>
              </form>
            </div>
            <div className="header-right">
              <div className="wishlist single-btn">
                <a href="#" className="wishlist-btn header-btn">
                  <div className="btn-left">
                    <AiOutlineHeart className="btn-icon" />
                    <span className="count">12</span>
                  </div>
                  <div className="btn-right">
                    <span className="btn-text">Wishlist</span>
                    <span className="item-count">12 items</span>
                  </div>
                </a>
              </div>
              <div className="compare single-btn">
                <a href="#" className="compare-btn header-btn">
                  <div className="btn-left">
                    <BsBarChart className="btn-icon" />
                    <span className="count">5</span>
                  </div>
                  <div className="btn-right">
                    <span className="btn-text">Compare</span>
                    <span className="item-count">5 items</span>
                  </div>
                </a>
              </div>
              <div className="cart single-btn">
                <a
                  data-bs-toggle="offcanvas"
                  href="#cartOffcanvasSidebar"
                  role="button"
                  aria-controls="cartOffcanvasSidebar"
                  className="cart-btn header-btn"
                >
                  <div className="btn-left">
                    <BsBag className="btn-icon" />
                    <span className="count">10</span>
                  </div>
                  <div className="btn-right">
                    <span className="btn-text">Your Cart</span>
                    <span className="price">$92.56</span>
                  </div>
                </a>
              </div>
            </div>
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
                          <a className="mega-menu-link" href="/productsAreaV01">
                            Shop Grid Leftsidebar
                            <span className="menu-item-badge new">New</span>
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="/productsAreaV02">
                            Shop Grid Rightsidebar
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="/productsAreaV03">
                            Shop Grid No Sidebar
                            <span className="menu-item-badge trending">
                              Trending
                            </span>
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="/productsAreaV01">
                            Shop List Leftsidebar
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="/productsAreaV02">
                            Shop List Rightsidebar
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="/productsAreaV03">
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
                          <a className="mega-menu-link" href="/compare">
                            Compare
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="/wish-list">
                            Wishlist
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="/empty-wish-list">
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
                  <a className="sub-menu-link" href="/faq">
                    Frequently Asked Questions
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="/refund-policy">
                    Refund policy
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="/error-page">
                    Error Page
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="/signIn">
                    Sign In
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="/signUp">
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

export default ProductAreaHeader;
