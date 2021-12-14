/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiFillStar } from "react-icons/ai";
import imgae1 from "../../assets/images/home-two-product-image-1.png";
import imgae2 from "../../assets/images/home-two-product-image-2.png";
import imgae3 from "../../assets/images/home-two-product-image-3.png";

const FeaturedProducts = () => {
  return (
    <div className="featured-products section-padding-t section-padding-secondary-b">
      <div className="container px-8 mx-auto">
        <div className="featured-products__header">
          <h2>Featured Products</h2>
        </div>
        <div className="featured-products__items">
          <div className="featured-products__items__item">
            <div className="featured-products__items__item__top">
              <a href="#">
                <img src={imgae1} alt="product" />
              </a>
              <div className="featured-products__items__product-flags">
                <span className="product-flag sale">SALE</span>
                <span className="product-flag discount">15%</span>
              </div>
              <ul className="product-btn-wrapper">
                <li>01010</li>
                <li>010</li>
              </ul>
              <div className="text-center product-info">
                <h4 className="product-catagory">New - Collection</h4>
                <h3 className="product-name">
                  <a className="product-link" href="single-product-v2.html">
                    Rosmo Namino Milancelos
                  </a>
                </h3>
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
                <div className="product-price">
                  <span className="regular-price">$770.18</span>
                  <span className="price">$700.08</span>
                </div>
                <div className="variable-single-item color-switch">
                  <div className="product-variable-color">
                    <label>
                      <input
                        name="modal-product-color"
                        className="color-select"
                        type="radio"
                        checked=""
                      />
                      <span className="product-color-black"></span>
                    </label>
                    <label>
                      <input
                        name="modal-product-color"
                        className="color-select"
                        type="radio"
                      />
                      <span className="product-color-tomato"></span>
                    </label>

                    <label>
                      <input
                        name="modal-product-color"
                        className="color-select"
                        type="radio"
                      />
                      <span className="product-color-gray"></span>
                    </label>
                  </div>
                </div>
                <ul className="size-switch">
                  <li className="single-size active">XL</li>
                  <li className="single-size">LARGE</li>
                  <li className="single-size">SMALL</li>
                </ul>
                <a href="cart.html" title="Add to cart" className="add-cart">
                  Add To Cart <i className="icon fas fa-plus-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="featured-products__items__item">
            <div className="featured-products__items__item__top">
              <a href="#">
                <img src={imgae2} alt="product" />
              </a>
              <div className="featured-products__items__product-flags">
                <span className="product-flag sale">SALE</span>
                <span className="product-flag discount">15%</span>
              </div>
              <ul className="product-btn-wrapper">
                <li>01010</li>
                <li>010</li>
              </ul>
              <div className="text-center product-info">
                <h4 className="product-catagory">HOT - COLLECTION</h4>
                <h3 className="product-name">
                  <a className="product-link" href="single-product-v2.html">
                    Midi Dress
                  </a>
                </h3>
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
                <div className="product-price">
                  <span className="regular-price">$270.18</span>
                  <span className="price">$100.08</span>
                </div>
                <div className="variable-single-item color-switch">
                  <div className="product-variable-color">
                    <label>
                      <input
                        name="modal-product-color"
                        className="color-select"
                        type="radio"
                        checked=""
                      />
                      <span className="product-color-black"></span>
                    </label>
                    <label>
                      <input
                        name="modal-product-color"
                        className="color-select"
                        type="radio"
                      />
                      <span className="product-color-tomato"></span>
                    </label>

                    <label>
                      <input
                        name="modal-product-color"
                        className="color-select"
                        type="radio"
                      />
                      <span className="product-color-gray"></span>
                    </label>
                  </div>
                </div>
                <ul className="size-switch">
                  <li className="single-size active">XL</li>
                  <li className="single-size">LARGE</li>
                  <li className="single-size">SMALL</li>
                </ul>
                <a href="cart.html" title="Add to cart" className="add-cart">
                  Add To Cart <i className="icon fas fa-plus-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="featured-products__items__item">
            <div className="featured-products__items__item__top">
              <a href="#">
                <img src={imgae3} alt="product" />
              </a>
              <div className="featured-products__items__product-flags">
                <span className="product-flag sale">SALE</span>
                <span className="product-flag discount">15%</span>
              </div>
              <ul className="product-btn-wrapper">
                <li>01010</li>
                <li>010</li>
              </ul>
              <div className="text-center product-info">
                <h4 className="product-catagory">NEW - COLLECTION</h4>
                <h3 className="product-name">
                  <a className="product-link" href="single-product-v2.html">
                    Black T-Shirt For Woman
                  </a>
                </h3>
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
                <div className="product-price">
                  <span className="regular-price">$800.18</span>
                  <span className="price">$600.08</span>
                </div>
                <div className="variable-single-item color-switch">
                  <div className="product-variable-color">
                    <label>
                      <input
                        name="modal-product-color"
                        className="color-select"
                        type="radio"
                        checked=""
                      />
                      <span className="product-color-black"></span>
                    </label>
                    <label>
                      <input
                        name="modal-product-color"
                        className="color-select"
                        type="radio"
                      />
                      <span className="product-color-tomato"></span>
                    </label>

                    <label>
                      <input
                        name="modal-product-color"
                        className="color-select"
                        type="radio"
                      />
                      <span className="product-color-gray"></span>
                    </label>
                  </div>
                </div>
                <ul className="size-switch">
                  <li className="single-size active">XL</li>
                  <li className="single-size">LARGE</li>
                  <li className="single-size">SMALL</li>
                </ul>
                <a href="cart.html" title="Add to cart" className="add-cart">
                  Add To Cart <i className="icon fas fa-plus-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
