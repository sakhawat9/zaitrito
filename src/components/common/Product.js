/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { BsBarChart } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
// import { useHistory } from "react-router-dom";

const Product = () => {
  //   const history = useHistory();
  //   const handleClick = (e) => {
  //     history.push(`/product/${featuredProduct.id}`);
  //   };
  return (
    <div className="single-product m-4">
      <div className="product-top">
        <img
          // onClick={handleClick}
          className="product-thumbnal cursor-pointer text-center"
          src="http://zairito-html.zainiktheme.com/demo/assets/images/product-image-4.png"
          alt="product"
        />
        <div className="product-flags">
          <span className="product-flag sale">sale</span>
          <span className="product-flag discount">-50%</span>
        </div>
        <ul className="prdouct-btn-wrapper">
          <li className="single-product-btn">
            <a
              className="addToWishlist product-btn"
              href="#"
              title="Add to compare"
            >
              <BsBarChart />
            </a>
          </li>
          <li className="single-product-btn">
            <a
              className="addCompare product-btn"
              href="#"
              title="Add to wishlist"
            >
              <BiHeart />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center product-info">
        <h4 className="product-catagory">category</h4>
        <h3 className="product-name product-link cursor-pointer">name</h3>
        <ul className="product-review">
          <li className="product-review__item active">
            <AiFillStar />
          </li>
          <li className="product-review__item active">
            <AiFillStar />
          </li>
          <li className="product-review__item active">
            <AiFillStar />
          </li>
          <li className="product-review__item">
            <AiFillStar />
          </li>
          <li className="product-review__item">
            <AiFillStar />
          </li>
        </ul>
        <div className="product-price">
          <span className="product-price__regular">$500</span>
          <span className="product-price__price">400</span>
        </div>
        <div className="variable-single-item color-switch">
          <div className="product-variable-color">
            <span className="product-variable-color__black"></span>
            <span className="product-variable-color__tomato"></span>
            <span className="product-variable-color__gray"></span>
          </div>
        </div>
        <ul className="size-switch">
          {/* {featuredProduct.size.map((s) => ( */}
          <li className="size-switch__single-size">xl</li>
          <li className="size-switch__single-size">m</li>
          <li className="size-switch__single-size">xl</li>
          {/* ))} */}
        </ul>
        <a href="#" title="Add to cart" className="add-cart">
          Add To Cart <IoMdAddCircle />
        </a>
      </div>
    </div>
  );
};

export default Product;
