/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { BsBarChart } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useHistory } from "react-router-dom";

const Product02 = ({ product }) => {
  const { name, category, img, price, regularprice } = product;

  const history = useHistory();
  const handleClick = () => {
    history.push(`/product/${product.id}`);
  };

  return (
    <div className="lg:col-span-3 col-span-12 md:col-span-6">
      <div className="product m-4">
        <div className="products-top">
          <img
            onClick={handleClick}
            className="product-thumbnail cursor-pointer text-center"
            src={img}
            alt="product"
          />

          <ul className="product-btn-wrapper">
            <li className="products-btn">
              <a
                className="addToWishlist product-btn"
                href="#"
                title="Add to compare"
              >
                <BsBarChart />
              </a>
            </li>
            <li className="products-btn">
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
          <h4 className="product-catagory">{category}</h4>
          <h3 className="product-name product-link cursor-pointer">{name}</h3>
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
            <span className="product-price__regular">${regularprice}</span>
            <span className="product-price__price">{price}</span>
          </div>
          <div className="variable-single-item color-switch">
            <div className="product-color">
              <span className="product-color__black"></span>
              <span className="product-color__tomato"></span>
              <span className="product-color__gray"></span>
            </div>
          </div>
          <ul className="size-switch">
            {product.size.map((s) => (
              <li className="size-switch__single-size">{s}</li>
            ))}
          </ul>
          <a href="#" title="Add to cart" className="add-cart">
            Add To Cart <IoMdAddCircle />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product02;
