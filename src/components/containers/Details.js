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
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import delivery from "../../assets/images/delivery-van-icon.svg";
import payment from "../../assets/images/payment-method-image.png";
import shipping from "../../assets/images/shipping-return.svg";

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
          <div className="grid grid-cols-12">
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
                          tabindex="-1"
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
                          tabindex="0"
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
                    <h4 className="product-catagory">ELLA - HALOTHEMES</h4>
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
                  <h3 className="product-name">Plaid Cotton Oxford Shirt</h3>
                  <p className="note-text">
                    Please note: We have this product in United States
                    warehouse. If destination means you can receive the parcel
                    faster and earlier than expected.
                  </p>
                  <div className="product-price">
                    <span className="price">$700.08</span>
                    <span className="regular-price">$770.18</span>
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

                  <div className="product-btn-wrapper flex items-center">
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
            <Tabs>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Curriculum</Tab>
                <Tab>Instructor</Tab>
                <Tab>Reviews </Tab>
              </TabList>
              <TabPanel>
                <div
                  className="tab-pane fade show active"
                  id="Description"
                  role="tabpanel"
                  aria-labelledby="Description-tab"
                >
                  <div className="product-description">
                    <p className="description-text">
                      Curabitur aliquet quam id dui posuere blandit. Donec
                      rutrum congue leo eget malesuada. Donec rutrum congue leo
                      eget malesuada. Donec rutrum congue leo eget malesuada.
                      Praesent sapien massa, convallis a pellentesque nec,
                      egestas non nisi. Praesent sapien massa, convallis a
                      pellentesque nec, egestas non nisi. Curabitur non nulla
                      sit amet nisl tempus convallis quis ac egestas non nisi.
                      Curabitur non nulla sit amet nisl tempus convallis quis ac
                      dictum porta. Mauris blandit aliquet elit, eget tincidunt
                      nibh pulvinar a. Praesent sapien massa, convallis a
                      pellentesque nec, egestas non nisi. Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere cubilia
                      Curae; Donec velit neque, auctor sit amet aliquam vel,
                      ullamcorper sit amet ligula.{" "}
                    </p>
                    <div className="feature-area mb-8">
                      <h3 className="feature-title">Sample Unordered List</h3>
                      <ul className="unordered-lsit">
                        <li className="list-item">
                          Comodous in tempor ullamcorper miaculis.
                        </li>
                        <li className="list-item">
                          Pellentesque vitae neque mollis urna mattis laoreet.
                        </li>
                        <li className="list-item">
                          Divamus sit amet purus justo.
                        </li>
                        <li className="list-item">
                          Proin molestie egestas orci ac suscipit risus posuere
                          loremous.
                        </li>
                      </ul>
                    </div>
                    <div className="feature-area">
                      <h3 className="feature-title">Sample Ordered List</h3>
                      <ol className="ordered-lsit mb-0">
                        <li className="list-item">
                          Comodous in tempor ullamcorper miaculis.
                        </li>
                        <li className="list-item">
                          Pellentesque vitae neque mollis urna mattis laoreet.
                        </li>
                        <li className="list-item">
                          Divamus sit amet purus justo.
                        </li>
                        <li className="list-item">
                          Proin molestie egestas orci ac suscipit risus posuere
                          loremous.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div
                  className="tab-pane fade"
                  id="Reviews"
                  role="tabpanel"
                  aria-labelledby="Reviews-tab"
                >
                  <div className="product-reviews">
                    <div className="review-top">
                      <div className="review-top-left">
                        <h3 className="review-title">Customer Reviews </h3>
                        <div className="review-start-point">
                          <ul className="review-list">
                            <li className="review-item active">
                              <AiFillStar />
                            </li>
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
                          </ul>
                          <span className="review-count">
                            Based on (2) Reviews{" "}
                          </span>
                        </div>
                      </div>
                      <div className="review-top-right">
                        <a href="#" className="write-review-btn">
                          Write A Review
                        </a>
                      </div>
                    </div>
                    <div className="reviews-list">
                      <div className="single-review">
                        <div className="reviewer">
                          <div className="reviewer-wrap">
                            <img
                              className="reviewer-image"
                              src="http://zairito-html.zainiktheme.com/demo/assets/images/reviewer-v2-image-1.png"
                              alt="reviewer-image"
                            />
                            <div className="reviewer-info">
                              <h4 className="reviewer-name">
                                Cameron Williamson
                              </h4>
                              <h4 className="review-meta">
                                <span className="time">25th Sep 2021 </span> by{" "}
                                <a className="author" href="#">
                                  Angelo Mathews
                                </a>
                              </h4>
                            </div>
                          </div>
                          <ul className="review-list">
                            <li className="review-item active">
                              <AiFillStar />
                            </li>
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
                          </ul>
                        </div>
                        <p className="review-text">
                          Vivamus suscipit tortor eget felis porttitor volutpat.
                          Nulla quis lorem ut libero malesuada feugiat. Praesent
                          sapien massa, convallis a pellentesque nec, egestas
                          non nisi. Mauris blandit aliquet elit, eget tincidunt
                          nibh pulvinar a. Vestibulum ante ipsum primis in
                          faucibus orci luctus et ultrices posuere cubilia
                          Curae; Donec velit neque, auctor sit amet aliquam vel,
                          ullamcorper sit amet ligula. Vestibulum ante ipsum
                          primis in faucibus orci luctus et ultrices posuere
                          cubilia Curae; Donec velit neque, auctor sit amet
                          aliquam vel
                        </p>
                      </div>
                      <div className="single-review">
                        <div className="reviewer">
                          <div className="reviewer-wrap">
                            <img
                              className="reviewer-image"
                              src="http://zairito-html.zainiktheme.com/demo/assets/images/reviewer-v2-image-2.png"
                              alt="reviewer-image"
                            />
                            <div className="reviewer-info">
                              <h4 className="reviewer-name">
                                James Williamson
                              </h4>
                              <h4 className="review-meta">
                                <span className="time">25th Sep 2021 </span> by{" "}
                                <a className="author" href="#">
                                  John Doe
                                </a>
                              </h4>
                            </div>
                          </div>
                          <ul className="review-list">
                            <li className="review-item active">
                              <AiFillStar />
                            </li>
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
                          </ul>
                        </div>
                        <p className="review-text">
                          Vivamus suscipit tortor eget felis porttitor volutpat.
                          Nulla quis lorem ut libero malesuada feugiat. Praesent
                          sapien massa, convallis a pellentesque nec, egestas
                          non nisi. Mauris blandit aliquet elit, eget tincidunt
                          nibh pulvinar a. Vestibulum ante ipsum primis in
                          faucibus orci luctus et ultrices posuere cubilia
                          Curae; Donec velit neque, auctor sit amet aliquam vel,
                          ullamcorper sit amet ligula. Vestibulum ante ipsum
                          primis in faucibus orci luctus et ultrices posuere
                          cubilia Curae; Donec velit neque, auctor sit amet
                          aliquam vel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div
                  className="tab-pane fade"
                  id="Shipping-Return"
                  role="tabpanel"
                  aria-labelledby="Shipping-Return-tab"
                >
                  <div className="shipping-return-area">
                    <div className="single-return-policy">
                      <h3 className="return-title">RETURNS POLICY</h3>
                      <p className="return-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi ut blandit risus. Donec mollis nec tellus et
                        rutrum. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Ut consequat
                        quam a purus faucibus scelerisque. Mauris ac dui ante.
                        Pellentesque congue porttitor tempus. Donec sodales
                        dapibus urna sed dictum. Duis congue posuere libero, a
                        aliquam est porta quis.
                      </p>
                      <p className="return-text">
                        Donec ullamcorper magna enim, vitae fermentum turpis
                        elementum quis. Interdum et malesuada fames ac ante
                        ipsum primis in faucibus.
                      </p>
                      <p className="return-text">
                        Curabitur vel sem mi. Proin in lobortis ipsum. Aliquam
                        rutrum tempor ex ac rutrum. Maecenas nunc nulla,
                        placerat at eleifend in, viverra etos sem. Nam sagittis
                        lacus metus, dignissim blandit magna euismod eget.
                        Suspendisse a nisl lacus. Phasellus eget augue
                        tincidunt, sollicitudin lectus sed, convallis desto.
                        Pellentesque vitae dui lacinia, venenatis erat sit amet,
                        fringilla felis. Nullam maximus nisi nec mi facilisis.
                      </p>
                    </div>
                    <div className="single-return-policy">
                      <h3 className="return-title">SHIPPING</h3>
                      <p className="return-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi ut blandit risus. Donec mollis nec tellus et
                        rutrum. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Ut consequat
                        quam a purus faucibus scelerisque. Mauris ac dui ante.
                        Pellentesque congue porttitor tempus. Donec sodales
                        dapibus urna sed dictum. Duis congue posuere libero, a
                        aliquam est porta quis.
                      </p>
                      <p className="return-text">
                        Donec ullamcorper magna enim, vitae fermentum turpis
                        elementum quis. Interdum et malesuada fames ac ante
                        ipsum primis in faucibus.
                      </p>
                      <p className="return-text">
                        Curabitur vel sem mi. Proin in lobortis ipsum. Aliquam
                        rutrum tempor ex ac rutrum. Maecenas nunc nulla,
                        placerat at eleifend in, viverra etos sem. Nam sagittis
                        lacus metus, dignissim blandit magna euismod eget.
                        Suspendisse a nisl lacus. Phasellus eget augue
                        tincidunt, sollicitudin lectus sed, convallis desto.
                        Pellentesque vitae dui lacinia, venenatis erat sit amet,
                        fringilla felis. Nullam maximus nisi nec mi facilisis.
                      </p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div
                  className="tab-pane fade"
                  id="Additional-Information"
                  role="tabpanel"
                  aria-labelledby="Additional-Information-tab"
                >
                  <div className="additional-information-area">
                    <p className="additional-information-text">
                      Quisque velit nisi, pretium ut lacinia in, elementum id
                      enim. Pellentesque in ipsum id orci porta dapibus. Mauris
                      blandit aliquet elit, eget tincidunt nibh pulvinar a.
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. Curabitur aliquet quam id dui posuere
                      blandit. Praesent sapien massa, convallis a pellentesque
                      nec, egestas non nisi. Donec sollicitudin molestie
                      malesuada. Nulla quis lorem ut libero malesuada feugiat.
                      Nulla quis lorem ut libero malesuada feugiat. Cras
                      ultricies ligula sed magna dictum porta. Mauris blandit
                      aliquet elit, eget tincidunt nibh pulvinar a. Sed
                      porttitor lectus nibh. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a. Nulla quis lorem ut libero
                      malesuada feugiat.{" "}
                    </p>
                    <ul className="additional-feature">
                      <li className="single-feature">
                        <h3 className="feature-title">Comodous:</h3>
                        <p className="feature-text">
                          Comodous in tempor ullamcorper miaculis
                        </p>
                      </li>
                      <li className="single-feature">
                        <h3 className="feature-title">Mattis laoreet:</h3>
                        <p className="feature-text">
                          Pellentesque vitae neque mollis urna mattis laoreet.
                        </p>
                      </li>
                      <li className="single-feature">
                        <h3 className="feature-title">Divamus de ametos:</h3>
                        <p className="feature-text">
                          Divamus sit amet purus justo
                        </p>
                      </li>
                      <li className="single-feature">
                        <h3 className="feature-title">Molestie:</h3>
                        <p className="feature-text">
                          Proin molestie egestas orci ac suscipit risus posuere
                          loremous
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>

          <div className="tab-content" id="ProductTabContent"></div>
        </div>
      </div>
    </div>
  );
};

export default Details;
