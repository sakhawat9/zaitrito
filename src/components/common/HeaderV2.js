/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsBag, BsBarChart, BsSearch } from "react-icons/bs";

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
                  <a className="menu-link" href="about-us.html">
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
                <a href="#" className="currency">
                  Usd <i className="fas fa-angle-down"></i>
                </a>
                <ul className="currency-list">
                  <li className="single-currency">
                    <a className="currency-text" href="#">
                      Usd
                    </a>
                  </li>
                  <li className="single-currency">
                    <a className="currency-text" href="#">
                      Rupi
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lang-switcher">
                <a href="#" className="lang">
                  Eng <i className="fas fa-angle-down"></i>
                </a>
                <ul className="lang-list">
                  <li className="single-lang">
                    <a className="lang-text" href="#">
                      Eng
                    </a>
                  </li>
                  <li className="single-lang">
                    <a className="lang-text" href="#">
                      Hin
                    </a>
                  </li>
                </ul>
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
                src="http://zairito-html.zainiktheme.com/demo/assets/images/zairito-home-two.png"
                alt="zairito-home-two"
              />
            </a>
          </div>
          <div className="header-right">
            <ul className="btn-list">
              <li className="single-items wishlist-area">
                <a className="single-btn wishlist-btn" href="#">
                  <AiOutlineHeart className="btn-icon" />
                </a>
              </li>
              <li className="single-items compare-area">
                <a className="single-btn compare-btn" href="#">
                  <BsBarChart className="btn-icon" />
                </a>
              </li>
              <li className="single-items cart-area">
                <a className="single-btn cart-btn">
                  <BsBag className="btn-icon" />
                </a>
              </li>
              <li className="single-items user-area">
                <a className="single-btn user-btn" href="#">
                  <BiUserCircle className="btn-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        {/* <nav className="menu-area">
          <ul className="main-menu">
            <li className="menu-item menu-item-has-children active">
              <a className="menu-link  flex items-center" href="#">
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
            <li className="menu-item mega-menu-parent">
              <a className="menu-link flex items-center" href="#">
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
                          <a
                            className="mega-menu-link"
                            href="#"
                          >
                            Shop Grid Leftsidebar{" "}
                            <span className="menu-item-badge new">New</span>
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a
                            className="mega-menu-link"
                            href="#"
                          >
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
                          <a
                            className="mega-menu-link"
                            href="shop-list-left-sidebar.html"
                          >
                            Shop List Leftsidebar
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a
                            className="mega-menu-link"
                            href="#"
                          >
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
                          <a
                            className="mega-menu-link"
                            href="#"
                          >
                            Product Single 1
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a
                            className="mega-menu-link"
                            href="#"
                          >
                            Product Single 2
                          </a>
                        </li>
                        <li className="mega-menu-items">
                          <a
                            className="mega-menu-link"
                            href="#"
                          >
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
                          <a
                            className="mega-menu-link"
                            href="#"
                          >
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
              <a className="menu-link  flex items-center" href="#">
                Pages <MdOutlineKeyboardArrowDown className="arrow-icon" />
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
              <a className="menu-link  flex items-center" href="#">
                Blog <MdOutlineKeyboardArrowDown className="arrow-icon" />
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
        </nav> */}
        <nav class="menu-area">
          <ul class="main-menu">
            <li class="menu-item menu-item-has-children">
              <a class="menu-link" href="#">
                Home <i class="arrow-icon fas fa-angle-down"></i>
              </a>
              <ul class="sub-menu">
                <li class="sub-menu-item">
                  <a class="sub-menu-link" href="#">
                    Home One
                  </a>
                </li>
                <li class="sub-menu-item">
                  <a class="sub-menu-link" href="#">
                    Home Two
                  </a>
                </li>
                <li class="sub-menu-item">
                  <a class="sub-menu-link" href="#">
                    Home Three
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-item mega-menu-parent active">
              <a class="menu-link" href="#">
                Shop <i class="arrow-icon fas fa-angle-down"></i>
              </a>
              <div class="mega-menu-area">
                <div class="container mx-auto px-8">
                  <ul class="mega-menu">
                    <li class="mega-menu-item">
                      <a class="mega-menu-title" href="#">
                        Shop Layout
                      </a>
                      <ul class="menu-items">
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Shop Grid Leftsidebar{" "}
                            <span class="menu-item-badge new">New</span>
                          </a>
                        </li>
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Shop Grid Rightsidebar{" "}
                          </a>
                        </li>
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Shop Grid No Sidebar{" "}
                            <span class="menu-item-badge trending">
                              Trending
                            </span>
                          </a>
                        </li>
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Shop List Leftsidebar
                          </a>
                        </li>
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Shop List Rightsidebar
                          </a>
                        </li>
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Shop List No Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="mega-menu-item">
                      <a class="mega-menu-title" href="#">
                        List Layout &amp; Others
                      </a>
                      <ul class="menu-items">
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Product Single 1
                          </a>
                        </li>
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Product Single 2
                          </a>
                        </li>
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Product Single 3
                          </a>
                        </li>
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Cart Page
                          </a>
                        </li>
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Checkout Page
                          </a>
                        </li>
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Compare
                          </a>
                        </li>
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Wishlist
                          </a>
                        </li>
                        <li class="mega-menu-items">
                          <a class="mega-menu-link" href="#">
                            Empty Wishlist
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="mega-menu-item">
                      <a class="mega-menu-banner" href="#">
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
            <li class="menu-item menu-item-has-children">
              <a class="menu-link" href="#">
                Pages <i class="arrow-icon fas fa-angle-down"></i>
              </a>
              <ul class="sub-menu">
                <li class="sub-menu-item">
                  <a class="sub-menu-link" href="#">
                    Term &amp; Conditions
                  </a>
                </li>
                <li class="sub-menu-item">
                  <a class="sub-menu-link" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li class="sub-menu-item">
                  <a class="sub-menu-link" href="#">
                    Shipping &amp; Return
                  </a>
                </li>
                <li class="sub-menu-item">
                  <a class="sub-menu-link" href="#">
                    Frequently Asked Questions
                  </a>
                </li>
                <li class="sub-menu-item">
                  <a class="sub-menu-link" href="#">
                    Refund policy
                  </a>
                </li>
                <li class="sub-menu-item">
                  <a class="sub-menu-link" href="#">
                    Error Page
                  </a>
                </li>
                <li class="sub-menu-item">
                  <a class="sub-menu-link" href="#">
                    Sign In
                  </a>
                </li>
                <li class="sub-menu-item">
                  <a class="sub-menu-link" href="#">
                    Sign Up
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <a class="menu-link" href="#">
                about us
              </a>
            </li>
            <li class="menu-item menu-item-has-children">
              <a class="menu-link" href="#">
                Blog <i class="arrow-icon fas fa-angle-down"></i>
              </a>
              <ul class="sub-menu">
                <li class="sub-menu-item">
                  <a class="sub-menu-link" href="#">
                    Blog Grid
                  </a>
                </li>
                <li class="sub-menu-item">
                  <a class="sub-menu-link" href="#">
                    Blog Single
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <a class="menu-link" href="#">
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
