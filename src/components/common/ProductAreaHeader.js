/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsBag, BsBarChart, BsSearch } from "react-icons/bs";

const ProductAreaHeader = () => {
  return (
    <header className="header-area hidden lg:block">
      <div className="header-top">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-12 align-items-center">
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
                      <a className="menu-link" href="#">
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
                    <span className="flag">
                      <i className="fas fa-dollar-sign"></i>
                    </span>
                    <a href="#" className="currency">
                      Usd <i className="fas fa-angle-down"></i>
                    </a>
                    <ul className="currency-list">
                      <li className="single-currency">
                        <span className="flag">
                          <i className="fas fa-dollar-sign"></i>
                        </span>
                        <a className="currency-text" href="#">
                          Usd
                        </a>
                      </li>
                      <li className="single-currency">
                        <span className="flag">
                          <i className="fas fa-rupee-sign"></i>
                        </span>
                        <a className="currency-text" href="#">
                          Rupi
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lang-switcher">
                    <span className="flag">
                      <img
                        src="http://zairito-html.zainiktheme.com/demo/assets/images/united-states.png"
                        alt="united-states"
                      />
                    </span>
                    <a href="#" className="lang">
                      Eng <i className="fas fa-angle-down"></i>
                    </a>
                    <ul className="lang-list">
                      <li className="single-lang">
                        <span className="flag">
                          <img
                            src="http://zairito-html.zainiktheme.com/demo/assets/images/united-states.png"
                            alt="united-states"
                          />
                        </span>
                        <a className="lang-text" href="#">
                          Eng
                        </a>
                      </li>
                      <li className="single-lang">
                        <span className="flag">
                          <img
                            src="http://zairito-html.zainiktheme.com/demo/assets/images/united-states.png"
                            alt="india"
                          />
                        </span>
                        <a className="lang-text" href="#">
                          Hin
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a className="account-btn" href="#">
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
              <a className="#" href="/l">
                <img
                  className="brand-image"
                  src="http://zairito-html.zainiktheme.com/demo/assets/images/zairito.png"
                  alt="zairito"
                />
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
                Home <i className="arrow-icon fas fa-angle-down"></i>
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
                Shop <i className="arrow-icon fas fa-angle-down"></i>
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
                          <a className="mega-menu-link" href="#">
                            Cart Page
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a className="mega-menu-link" href="#">
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
                          src="http://zairito-html.zainiktheme.com/demo/assets/images/mega-menu-banner.png"
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
                Pages <i className="arrow-icon fas fa-angle-down"></i>
              </a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">
                    Term &amp; Conditions
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">
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
                  <a className="sub-menu-link" href="#">
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
              <a className="menu-link" href="#">
                about us
              </a>
            </li>

            <li className="menu-item menu-item-has-children">
              <a className="menu-link" href="#">
                Blog <i className="arrow-icon fas fa-angle-down"></i>
              </a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">
                    Blog Grid
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a className="sub-menu-link" href="#">
                    Blog Single
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <a className="menu-link" href="#">
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
