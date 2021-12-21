/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";
import footerImg from "../../assets/images/accepts-image.png";
import footerLogo from "../../assets/images/footer-logo-two.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__widget">
        <div className="footer__widget__wrapper">
          <div className="grid grid-cols-12 gap-4">
            <div className="footer__widget__wrapper__area">
              <div className="footer__widget__wrapper__area__single-item about-widget">
                <a
                  href="#"
                  className="footer__widget__wrapper__area__single-item__logo"
                >
                  <img src={footerLogo} alt="footer-logo" />
                </a>
                <p className="address-text">
                  685 Market Street <br /> San Francisco, CA 94105, <br />
                  United States
                </p>
                <div className="block-content mb-12">
                  <p className="contact">Call us: 1.800.000.6690</p>
                  <p className="contact">Email: support@zainikthemes.com</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 col-span-6">
              <div className="footer__widget__wrapper__area__single-item">
                <h3 className="footer__widget__wrapper__area__single-item__title">
                  Shop by
                </h3>
                <ul className="footer__widget__wrapper__area__single-item__menu">
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Appliances
                    </a>
                  </li>
                  <li className="meni-item">
                    <a
                      className="menu-link"
                      href="#"
                    >
                      Computers &amp; Laptops
                    </a>
                  </li>
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Cameras
                    </a>
                  </li>
                  <li className="meni-item">
                    <a className="menu-link" href="shop-list.html">
                      Mobile Phones{" "}
                    </a>
                  </li>
                  <li className="meni-item">
                    <a
                      className="menu-link"
                      href="#"
                    >
                      Televisions
                    </a>
                  </li>
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Video Games
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2 col-span-6">
              <div className="footer__widget__wrapper__area__single-item">
                <h3 className="footer__widget__wrapper__area__single-item__title">
                  Information
                </h3>
                <ul className="footer__widget__wrapper__area__single-item__menu">
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      About us
                    </a>
                  </li>
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Weekly Deals
                    </a>
                  </li>
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Cart
                    </a>
                  </li>
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Sign In
                    </a>
                  </li>
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2 col-span-6">
              <div className="footer__widget__wrapper__area__single-item">
                <h3 className="footer__widget__wrapper__area__single-item__title">
                  Customer Service
                </h3>
                <ul className="footer__widget__wrapper__area__single-item__menu">
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Help &amp; FAQs
                    </a>
                  </li>
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Terms of Conditions
                    </a>
                  </li>
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Online Returns Policy
                    </a>
                  </li>
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Shipping &amp; Return
                    </a>
                  </li>
                  <li className="meni-item">
                    <a className="menu-link" href="#">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-3 col-span-6">
              <div className="footer__widget__wrapper__area__single-item social-media-widget">
                <h3 className="footer__widget__wrapper__area__single-item__title">
                  Social Links
                </h3>
                <ul className="social-media">
                  <li className="social-media-item">
                    <a className="social-media-link" href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="social-media-item">
                    <a className="social-media-link" href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="social-media-item">
                    <a className="social-media-link" href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-media-item">
                    <a className="social-media-link" href="#">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="footer-bottom">
          <div className="footer-bottom__wrap">
            <div className="footer-bottom__wrap__wrapper">
              <div className="col-span-6">
                <p className="copyright-text">
                  Designed And Developed By Team
                  <a className="brand-name" href="#">
                    Zainiktheme
                  </a>
                  Digital Agency @2021
                </p>
              </div>
              <div className="col-span-6 text-lg-end">
                <img
                  className="payment-icons"
                  src={footerImg}
                  alt="accepts-image"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </footer>
  );
};

export default Footer;
