/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaPlay } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Products from "./Products";

const ProductArea = () => {
  return (
    <div className="product-area section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="xl:col-span-3 md:col-span-6 lg:col-span-4">
            <div className="sidebar-widget-area mobile-sidebar">
              <div className="sidebar-widget-header block lg:hidden">
                <div className="widget-header-wrap">
                  <h5 className="offcanvas-title">Filter</h5>
                  <button
                    type="button"
                    className="btn-close text-reset sidebar-close"
                  ></button>
                </div>
              </div>

              <div className="single-widget search-widget">
                <h3>Search Here</h3>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      name="searchwidget"
                      placeholder="Product Store"
                    />
                    <button type="button">
                      <FiSearch />
                    </button>
                  </div>
                </form>
              </div>

              <div className="single-widget categories-widget">
                <h3>Categories</h3>
                <div className="colors-list">
                  <div className="single-categorie">
                    <div className="categorie-left">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Tshirts"
                      />
                      <label className="form-check-label" for="Tshirts">
                        T-shirts &amp; shirts
                      </label>
                    </div>
                    <span className="categories-count">16</span>
                  </div>
                  <div className="single-categorie">
                    <div className="categorie-left">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Jackets"
                      />
                      <label className="form-check-label" for="Jackets">
                        Jackets
                      </label>
                    </div>
                    <span className="categories-count">6</span>
                  </div>
                  <div className="single-categorie">
                    <div className="categorie-left">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Sports"
                      />
                      <label className="form-check-label" for="Sports">
                        Sports &amp; Active Wear
                      </label>
                    </div>
                    <span className="categories-count">8</span>
                  </div>
                  <div className="single-categorie">
                    <div className="categorie-left">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Blazers"
                      />
                      <label className="form-check-label" for="Blazers">
                        Blazers &amp; Coats
                      </label>
                    </div>
                    <span className="categories-count">10</span>
                  </div>
                  <div className="single-categorie">
                    <div className="categorie-left">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Overshirts"
                      />
                      <label className="form-check-label" for="Overshirts">
                        Overshirts
                      </label>
                    </div>
                    <span className="categories-count">3</span>
                  </div>
                  <div className="single-categorie">
                    <div className="categorie-left">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Coats"
                      />
                      <label className="form-check-label" for="Coats">
                        Coats &amp; Jackets
                      </label>
                    </div>
                    <span className="categories-count">25</span>
                  </div>
                </div>
              </div>

              <div className="single-widget price-widget">
                <h3>Price</h3>
                <form>
                  <div className="price-wrap">
                    <div className="price-wrap-left">
                      <div className="single-price">
                        <input
                          type="number"
                          className="form-control"
                          id="minprice"
                          name="minprice"
                          placeholder="$ Min"
                        />
                      </div>
                      <div className="single-price">
                        <input
                          type="number"
                          className="form-control"
                          id="maxprice"
                          name="maxprice"
                          placeholder="$ Max"
                        />
                      </div>
                    </div>
                    <button type="button" className="price-submit">
                      <FaPlay />
                    </button>
                  </div>
                </form>
              </div>

              <div className="single-widget colors-widget">
                <h3>Colors</h3>
                <div className="colors-list">
                  <div className="single-colors">
                    <div className="colors-left">
                      <input
                        className="form-check-input rounded-full green"
                        type="checkbox"
                        id="Jungle"
                      />
                      <label className="form-check-label" for="Jungle">
                        Jungle Green
                      </label>
                    </div>
                    <span className="colors-count">15</span>
                  </div>
                  <div className="single-colors">
                    <div className="colors-left">
                      <input
                        className="form-check-input cerise"
                        type="checkbox"
                        id="Cerise"
                      />
                      <label className="form-check-label" for="Cerise">
                        Cerise
                      </label>
                    </div>
                    <span className="colors-count">18</span>
                  </div>
                  <div className="single-colors">
                    <div className="colors-left">
                      <input
                        className="form-check-input magi-mint"
                        type="checkbox"
                        id="MagicMint"
                      />
                      <label className="form-check-label" for="MagicMint">
                        Magic Mint
                      </label>
                    </div>
                    <span className="colors-count">9</span>
                  </div>
                  <div className="single-colors">
                    <div className="colors-left">
                      <input
                        className="form-check-input pink-sherbet"
                        type="checkbox"
                        id="PinkSherbet"
                      />
                      <label className="form-check-label" for="PinkSherbet">
                        Pink Sherbet
                      </label>
                    </div>
                    <span className="colors-count">26</span>
                  </div>
                  <div className="single-colors">
                    <div className="colors-left">
                      <input
                        className="form-check-input vivid-tangerine"
                        type="checkbox"
                        id="VividTangerine"
                      />
                      <label className="form-check-label" for="VividTangerine">
                        Vivid Tangerine
                      </label>
                    </div>
                    <span className="colors-count">6</span>
                  </div>
                  <div className="single-colors">
                    <div className="colors-left">
                      <input
                        className="form-check-input hot-magenta"
                        type="checkbox"
                        id="HotMagenta"
                      />
                      <label className="form-check-label" for="HotMagenta">
                        Hot Magenta
                      </label>
                    </div>
                    <span className="colors-count">11</span>
                  </div>
                </div>
              </div>

              <div className="single-widget size-widget">
                <h3>Size</h3>
                <div className="size-list">
                  <div className="single-size">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="SMALL"
                    />
                    <label className="form-check-label" for="SMALL">
                      SMALL
                    </label>
                  </div>
                  <div className="single-size">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="MEDIUM"
                    />
                    <label className="form-check-label" for="MEDIUM">
                      MEDIUM
                    </label>
                  </div>
                  <div className="single-size">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="LARGE"
                    />
                    <label className="form-check-label" for="LARGE">
                      LARGE
                    </label>
                  </div>
                  <div className="single-size">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="XL"
                    />
                    <label className="form-check-label" for="XL">
                      XL
                    </label>
                  </div>
                  <div className="single-size">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="XXL"
                    />
                    <label className="form-check-label" for="XXL">
                      XXL
                    </label>
                  </div>
                  <div className="single-size">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="XXXL"
                    />
                    <label className="form-check-label" for="XXXL">
                      XXXL
                    </label>
                  </div>
                </div>
              </div>

              <div className="single-widget brand-widget">
                <h3>Brand</h3>
                <div className="brand-list">
                  <div className="single-brand">
                    <div className="brand-left">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Renuar"
                      />
                      <label className="form-check-label" for="Renuar">
                        Renuar
                      </label>
                    </div>
                    <span className="brand-count">55</span>
                  </div>
                  <div className="single-brand">
                    <div className="brand-left">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Zara"
                      />
                      <label className="form-check-label" for="Zara">
                        Zara
                      </label>
                    </div>
                    <span className="brand-count">64</span>
                  </div>
                  <div className="single-brand">
                    <div className="brand-left">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Bershka"
                      />
                      <label className="form-check-label" for="Bershka">
                        Bershka
                      </label>
                    </div>
                    <span className="brand-count">81</span>
                  </div>
                  <div className="single-brand">
                    <div className="brand-left">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="HM"
                      />
                      <label className="form-check-label" for="HM">
                        H&amp;M
                      </label>
                    </div>
                    <span className="brand-count">77</span>
                  </div>
                  <div className="single-brand">
                    <div className="brand-left">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Stradivarius"
                      />
                      <label className="form-check-label" for="Stradivarius">
                        Stradivarius
                      </label>
                    </div>
                    <span className="brand-count">75</span>
                  </div>
                </div>
              </div>

              <div className="single-widget tags-widget">
                <h3>Tags</h3>
                <ul className="tags-list">
                  <li className="tag-item">
                    <a
                      className="tag-link active"
                      href="#"
                    >
                      Fashion
                    </a>
                  </li>
                  <li className="tag-item">
                    <a className="tag-link" href="#">
                      Hats
                    </a>
                  </li>
                  <li className="tag-item">
                    <a className="tag-link" href="#">
                      Vagabond
                    </a>
                  </li>
                  <li className="tag-item">
                    <a className="tag-link" href="#">
                      Sandal
                    </a>
                  </li>
                  <li className="tag-item">
                    <a className="tag-link" href="#">
                      Beachwear
                    </a>
                  </li>
                  <li className="tag-item">
                    <a className="tag-link" href="#">
                      Sunglasses
                    </a>
                  </li>
                  <li className="tag-item">
                    <a className="tag-link" href="#">
                      Denim
                    </a>
                  </li>
                  <li className="tag-item">
                    <a className="tag-link" href="#">
                      Magenta
                    </a>
                  </li>
                  <li className="tag-item">
                    <a className="tag-link" href="#">
                      leather
                    </a>
                  </li>
                  <li className="tag-item">
                    <a className="tag-link" href="#">
                      Vagabond
                    </a>
                  </li>
                </ul>
              </div>

              <div className="single-widget rating-widget">
                <h3>Rating</h3>
                <ul className="rating-list">
                  <li className="rating-item">
                    <a className="rating-link" href="#">
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star active" />
                      <span className="and-up-text">And Up</span>
                    </a>
                  </li>
                  <li className="rating-item">
                    <a className="rating-link" href="#">
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star" />
                      <span className="and-up-text">And Up</span>
                    </a>
                  </li>
                  <li className="rating-item">
                    <a className="rating-link" href="#">
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star" />
                      <AiFillStar className="flaticon-star" />
                      <span className="and-up-text">And Up</span>
                    </a>
                  </li>
                  <li className="rating-item">
                    <a className="rating-link" href="#">
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star" />
                      <AiFillStar className="flaticon-star" />
                      <AiFillStar className="flaticon-star" />
                      <span className="and-up-text">And Up</span>
                    </a>
                  </li>
                  <li className="rating-item">
                    <a className="rating-link" href="#">
                      <AiFillStar className="flaticon-star active" />
                      <AiFillStar className="flaticon-star" />
                      <AiFillStar className="flaticon-star" />
                      <AiFillStar className="flaticon-star" />
                      <AiFillStar className="flaticon-star" />
                      <span className="and-up-text">And Up</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="xl:col-span-9 lg:col-span-8 col-span-12">
            <div className="product-section-top">
              <div className="grid grid-cols-12 items-center">
                <div className="md:col-span-3 col-span-12">
                  <div className="product-section-top-left">
                    <button
                      className="sidebar-filter items-center flex block lg:hidden"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasExample"
                      aria-controls="offcanvasExample"
                    >
                      Filter
                      <img
                        src="http://zairito-html.zainiktheme.com/demo/assets/images/angle-down.svg"
                        alt="angle-down"
                      />
                    </button>
                    <div className="list-grid-view">
                      <a
                        href="#"
                        className="view-btn list-view"
                      >
                        <img
                          className="view-icon"
                          src="http://zairito-html.zainiktheme.com/demo/assets/images/view-list.svg"
                          alt="view-list"
                        />
                      </a>
                      <a
                        href="#"
                        className="view-btn grid-view active"
                      >
                        <img
                          className="view-icon"
                          src="http://zairito-html.zainiktheme.com/demo/assets/images/view-grid.svg"
                          alt="view-grid"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-9 col-span-12">
                  <div className="product-filter">
                    <p className="shoing-result">Showing 1 - 9 of 9 result</p>
                    <form>
                      <select className="form-select">
                        <option selected="">Default Sorting</option>
                        <option value="1">Categories</option>
                        <option value="2">Colors</option>
                        <option value="3">Tags</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-12">
                <Products />
              </div>

              <div className="pagination-area mt-8">
                <ul className="paginations text-center">
                  <li className="pagination-page">
                    <a href="#" className="pagination-link">
                      <FaAngleDoubleLeft />
                    </a>
                  </li>
                  <li className="pagination-page active">
                    <a href="#" className="pagination-link">
                      1
                    </a>
                  </li>
                  <li className="pagination-page">
                    <a href="#" className="pagination-link">
                      2
                    </a>
                  </li>
                  <li className="pagination-page">
                    <a href="#" className="pagination-link">
                      3
                    </a>
                  </li>
                  <li className="pagination-page">
                    <a href="#" className="pagination-link">
                      <FaAngleDoubleRight />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductArea;
