/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const MobileFilterSidebar = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start show"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        aria-modal="true"
        role="dialog"
        style={{ visibility: "visible" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Filter
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="sidebar-widget-area">
            <div className="single-widget search-widget p-0 bg-transparent">
              <h3 className="widget-title">Search Here</h3>
              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control bg-color"
                    id="searchwidget1"
                    name="searchwidget1"
                    placeholder="Product Store"
                  />
                  <button type="submit" className="search-btn">
                    <i className="flaticon-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="single-widget categories-widget p-0 bg-transparent">
              <h3 className="widget-title">Categories</h3>
              <div className="categories-list">
                <div className="single-categorie">
                  <div className="categorie-left">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      
                      id="Tshirts1"
                    />
                    <label className="form-check-label" htmlFor="Tshirts1">
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
                      
                      id="Jackets1"
                    />
                    <label className="form-check-label" htmlFor="Jackets1">
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
                      
                      id="Sports1"
                    />
                    <label className="form-check-label" htmlFor="Sports1">
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
                      
                      id="Blazers1"
                    />
                    <label className="form-check-label" htmlFor="Blazers1">
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
                      
                      id="Overshirts1"
                    />
                    <label className="form-check-label" htmlFor="Overshirts1">
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
                      
                      id="Coats1"
                    />
                    <label className="form-check-label" htmlFor="Coats1">
                      Coats &amp; Jackets
                    </label>
                  </div>
                  <span className="categories-count">25</span>
                </div>
              </div>
            </div>
            <div className="single-widget price-widget p-0 bg-transparent">
              <h3 className="widget-title">Price</h3>
              <form action="#">
                <div className="price-wrap">
                  <div className="price-wrap-left">
                    <div className="single-price">
                      <input
                        type="number"
                        className="form-control"
                        id="minprice1"
                        name="minprice1"
                        placeholder="$ Min"
                      />
                    </div>
                    <div className="single-price">
                      <input
                        type="number"
                        className="form-control"
                        id="maxprice1"
                        name="maxprice1"
                        placeholder="$ Max"
                      />
                    </div>
                  </div>
                  <button type="submit" className="price-submit">
                    <i className="fas fa-play"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="single-widget colors-widget p-0 bg-transparent">
              <h3 className="widget-title">Colors</h3>
              <div className="colors-list">
                <div className="single-colors">
                  <div className="colors-left">
                    <input
                      className="form
                      -check-input green"
                      type="checkbox"
                      id="Jungle1"
                    />
                    <label className="form-check-label" htmlFor="Jungle1">
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
                      id="Cerise1"
                    />
                    <label className="form-check-label" htmlFor="Cerise1">
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
                      id="MagicMint1"
                    />
                    <label className="form-check-label" htmlFor="MagicMint1">
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
                      id="PinkSherbet1"
                    />
                    <label className="form-check-label" htmlFor="PinkSherbet1">
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
                      id="VividTangerine1"
                    />
                    <label className="form-check-label" htmlFor="VividTangerine1">
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
                      id="HotMagenta1"
                    />
                    <label className="form-check-label" htmlFor="HotMagenta1">
                      Hot Magenta
                    </label>
                  </div>
                  <span className="colors-count">11</span>
                </div>
              </div>
            </div>
            <div className="single-widget size-widget p-0 bg-transparent">
              <h3 className="widget-title">Size</h3>
              <div className="size-list">
                <div className="single-size">
                  <input className="form-check-input" type="checkbox" id="SMALL1" />
                  <label className="form-check-label" htmlFor="SMALL1">
                    SMALL
                  </label>
                </div>
                <div className="single-size">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="MEDIUM1"
                  />
                  <label className="form-check-label" htmlFor="MEDIUM1">
                    MEDIUM
                  </label>
                </div>
                <div className="single-size">
                  <input className="form-check-input" type="checkbox" id="LARGE1" />
                  <label className="form-check-label" htmlFor="LARGE1">
                    LARGE
                  </label>
                </div>
                <div className="single-size">
                  <input className="form-check-input" type="checkbox" id="XL1" />
                  <label className="form-check-label" htmlFor="XL1">
                    XL
                  </label>
                </div>
                <div className="single-size">
                  <input className="form-check-input" type="checkbox" id="XXL1" />
                  <label className="form-check-label" htmlFor="XXL1">
                    XXL
                  </label>
                </div>
                <div className="single-size">
                  <input className="form-check-input" type="checkbox" id="XXXL1" />
                  <label className="form-check-label" htmlFor="XXXL1">
                    XXXL
                  </label>
                </div>
              </div>
            </div>
            <div className="single-widget brand-widget p-0 bg-transparent">
              <h3 className="widget-title">Brand</h3>
              <div className="brand-list">
                <div className="single-brand">
                  <div className="brand-left">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Renuar1"
                    />
                    <label className="form-check-label" htmlFor="Renuar1">
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
                      id="Zara1"
                    />
                    <label className="form-check-label" htmlFor="Zara1">
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
                      id="Bershka1"
                    />
                    <label className="form-check-label" htmlFor="Bershka1">
                      Bershka
                    </label>
                  </div>
                  <span className="brand-count">81</span>
                </div>
                <div className="single-brand">
                  <div className="brand-left">
                    <input className="form-check-input" type="checkbox" id="HM1" />
                    <label className="form-check-label" htmlFor="HM1">
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
                      id="Stradivarius1"
                    />
                    <label className="form-check-label" htmlFor="Stradivarius1">
                      Stradivarius
                    </label>
                  </div>
                  <span className="brand-count">75</span>
                </div>
              </div>
            </div>
            <div className="single-widget tags-widget p-0 bg-transparent">
              <h3 className="widget-title">Tags</h3>
              <ul className="tags-list">
                <li className="tag-item">
                  <a className="tag-link active" href="#">
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
            <div className="single-widget rating-widget p-0 bg-transparent">
              <h3 className="widget-title">Rating</h3>
              <ul className="rating-list">
                <li className="rating-item">
                  <a className="rating-link" href="#">
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star active"></i>
                  </a>
                </li>
                <li className="rating-item">
                  <a className="rating-link" href="#">
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star"></i>
                    <span className="and-up-text">And Up</span>
                  </a>
                </li>
                <li className="rating-item">
                  <a className="rating-link" href="#">
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star"></i>
                    <i className="flaticon-star"></i>
                    <span className="and-up-text">And Up</span>
                  </a>
                </li>
                <li className="rating-item">
                  <a className="rating-link" href="#">
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star"></i>
                    <i className="flaticon-star"></i>
                    <i className="flaticon-star"></i>
                    <span className="and-up-text">And Up</span>
                  </a>
                </li>
                <li className="rating-item">
                  <a className="rating-link" href="#">
                    <i className="flaticon-star active"></i>
                    <i className="flaticon-star"></i>
                    <i className="flaticon-star"></i>
                    <i className="flaticon-star"></i>
                    <i className="flaticon-star"></i>
                    <span className="and-up-text">And Up</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFilterSidebar;
