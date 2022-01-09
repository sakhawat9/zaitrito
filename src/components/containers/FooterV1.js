/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaSkype,
    FaTwitter
} from "react-icons/fa";
import footerImg from "../../assets/images/accepts-image.png";
import footerLogo from "../../assets/images/footer-logo-two.png";

const FooterV1 = () => {
  return (
    <footer className="footer-area">
      <div className="footer-widget-area">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-4">
              <div className="single-widget about-widget">
                <a href="#" className="footer-brand-logo mb-25">
                  <img src={footerLogo} alt="footer-logo" />
                </a>
                <p className="address-text">
                  685 Market Street <br /> San Francisco, CA 94105, <br />
                  United States
                </p>
                <div className="block-content mb-30">
                  <p className="contact">Call us: 1.800.000.6690</p>
                  <p className="contact">Email: support@zainikthemes.com</p>
                </div>
                <ul className="social-media">
                  <li className="social-media-item">
                    <a className="social-media-link" href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="social-media-item">
                    <a className="social-media-link" href="#">
                      <FaSkype />
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
            <div className="xl:col-span-6 lg:col-span-8 md:col-span-8 sm:col-span-8">
              <div className="grid gap-4 grid-cols-12">
                <div className="lg:col-span-4 md:col-span-4 sm:col-span-4">
                  <div className="single-widget">
                    <h3 className="widget-title">Shop by</h3>
                    <ul className="widget-menu show">
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Appliances
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Computers &amp; Laptops
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Cameras
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Mobile Phones
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Televisions
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Video Games
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:col-span-4 md:col-span-4 sm:col-span-4">
                  <div className="single-widget">
                    <h3 className="widget-title">Information</h3>
                    <ul className="widget-menu">
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          About us
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Blog
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Weekly Deals
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Cart
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Sign In
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Sign Up
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:col-span-4 md:col-span-4 sm:col-span-4">
                  <div className="single-widget">
                    <h3 className="widget-title">Customer Service</h3>
                    <ul className="widget-menu">
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Help &amp; FAQs
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Terms of Conditions
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Privacy Policy
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Online Returns Policy
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Shipping &amp; Return
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="#">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-6">
              <div className="single-widget newsletter-widget">
                <h3 className="widget-title">Newsletter Sign Up</h3>
                <p className="newsletter-text">
                  Receive our latest updates about our <br /> products and
                  promotions.
                </p>
                <div className="newsletter-form mb-40">
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="newsletter"
                        name="newsletter"
                        placeholder="Your Email Address"
                      />
                      <button type="button" className="subscribe-btn">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
                <div className="payment-area">
                  <h3 className="widget-title">We Accepts</h3>
                  <img
                    className="payment-icons"
                    src={footerImg}
                    alt="accepts-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container mx-auto px-8">
          <div className="footer-bottom-wrap">
            <p className="copyright-text">
              Designed And Developed By Team{" "}
              <a className="brand-name" href="#">
                Zainiktheme
              </a>{" "}
              Digital Agency @2021
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterV1;
