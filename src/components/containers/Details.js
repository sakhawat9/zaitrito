/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlinePlusCircle
} from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegHeart,
  FaTwitter
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "react-tabs/style/react-tabs.css";
import delivery from "../../assets/images/delivery-van-icon.svg";
import payment from "../../assets/images/payment-method-image.png";
import shipping from "../../assets/images/shipping-return.svg";
import Detail from "./Detail";

const carouselProperties = {
  slidesToShow: 3,
  centerMode: true,
  autoplay: true,
  // centerPadding: "200px",
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
  ],
};

const Details = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const exactData = data.filter((td) => td.id === id);

  return (
    <div className="product-single-area-v2 section-padding-t">
      <div className="container mx-auto px-8">
        <div className="product-single-details">
          <div className="grid gap-4 grid-cols-12">
            <div className="lg:col-span-6 md:col-span-6 col-span-12">
              <div className="product-single-left">
                <div className="product-slier-big-image">
                  <div className="product-priview-slide-v2 slick-initialized slick-slider">
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{ opacity: 1, width: "2076px" }}
                      >
                        <div
                          className="single-slide relative left-0 top-0 slick-slide"
                          data-slick-index="0"
                          aria-hidden="true"
                          style={{
                            zIndex: 999,
                            // opacity: 0,
                            transition: "opacity 500ms ease 0s",
                          }}
                          tabIndex="-1"
                        >
                          <img
                            className="max-w-full h-auto inline-block"
                            src={exactData[0]?.img}
                            alt="product"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-thumbnail-image">
                  <Slider {...carouselProperties}>
                    {data.map((item, index) => (
                      <>
                        <li
                          className="single-item slick-slide slick-current slick-active"
                          data-slick-index="0"
                          aria-hidden="false"
                          style={{ width: "157px" }}
                          tabIndex="0"
                        >
                          <img
                            className="single-item-image"
                            src={item.img}
                            alt="product"
                          />
                        </li>
                      </>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 md:col-span-6 col-span-12">
              <div className="product-single-right">
                <div className="product-info">
                  <div className="product-info-top">
                    <h4 className="product-catagory">{exactData[0]?.category}</h4>
                    <ul className="product-review">
                      <li className="review-item active">
                        <AiFillStar />
                      </li>
                      <li className="review-item active">
                        <AiFillStar />
                      </li>
                      <li className="review-item active">
                        <AiFillStar />
                      </li>
                      <li className="review-item">
                        <AiFillStar />
                      </li>
                      <li className="review-item">
                        <AiFillStar />
                      </li>
                    </ul>
                  </div>
                  <h3 className="product-name">{exactData[0]?.name}</h3>
                  <p className="note-text">
                    Please note: We have this product in United States
                    warehouse. If destination means you can receive the parcel
                    faster and earlier than expected.
                  </p>
                  <div className="product-price">
                    <span className="price">${exactData[0]?.regularprice}</span>
                    <span className="regular-price">${exactData[0]?.price}</span>
                  </div>
                  <div className="product-size-area">
                    <h4 className="size-title">SIZE : XL</h4>
                    <ul className="size-switch">
                      <li className="single-size active">XL</li>
                      <li className="single-size">LARGE</li>
                      <li className="single-size">SMALL</li>
                    </ul>
                  </div>

                  <div className="variable-single-item pb-4">
                    <div className="product-variable-color">
                      <span className="product-variable-color__black"></span>
                      <span className="product-variable-color__tomato"></span>
                      <span className="product-variable-color__gray"></span>
                    </div>
                  </div>

                  <div className="product-btns flex items-center">
                    <div className="cart-plus-minus">
                      <div className="dec qtybutton btn">
                        <AiOutlineMinus className="text-black" />
                      </div>
                      <input
                        type="text"
                        name="qtybutton"
                        value="1"
                        readonly=""
                      />
                      <div className="inc qtybutton btn">
                        <AiOutlinePlus />
                      </div>
                    </div>
                    <a href="#" title="Add to cart" className="add-cart">
                      Add To Cart <AiOutlinePlusCircle />
                    </a>
                  </div>
                  <div className="product-bottom-button flex">
                    <a href="#" className="primary-btn">
                      Buy Now
                    </a>
                    <a
                      className="addCompare product-btn"
                      href="#"
                      title="Add to wishlist"
                    >
                      <FaRegHeart />
                    </a>
                    <a
                      className="addToWishlist product-btn"
                      href="#"
                      title="Add to compare"
                    >
                      <BsBarChart />
                    </a>
                  </div>
                </div>
                <div className="product-right-bottom">
                  <ul className="features">
                    <li className="single-feature">
                      <img className="icon" src={delivery} alt="icon" />
                      <strong className="feature-title">
                        Estimated Delivery:
                      </strong>
                      <span className="feature-text">Sep 13 - Sep 17</span>
                    </li>
                    <li className="single-feature">
                      <img className="icon" src={shipping} alt="icon" />
                      <strong className="feature-title">
                        Free Shipping &amp; Returns:
                      </strong>
                      <span className="feature-text">
                        On all orders over $75
                      </span>
                    </li>
                  </ul>
                  <div className="guarantee-checkout-area">
                    <img src={payment} alt="payment-method-image" />
                  </div>
                  <div className="share-area flex items-center mt-8">
                    <h3 className="share-title">SHARE:</h3>
                    <ul className="social-media">
                      <li className="media-item">
                        <a className="media-link facebook" href="#">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li className="media-item">
                        <a className="media-link twitter" href="#">
                          <FaTwitter />
                        </a>
                      </li>
                      <li className="media-item">
                        <a className="media-link linkedin" href="#">
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li className="media-item">
                        <a className="media-link pinterest" href="#">
                          <FaPinterestP />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-bottom-info mt-12">
          <div className="nav-tabs-menu">
            <Detail key={exactData[0]?.id} data={exactData[0]} />
          </div>

          <div className="tab-content" id="ProductTabContent"></div>
        </div>
      </div>
    </div>
  );
};

export default Details;
