/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Products02 from "../common/Products02";

const ProductArea02 = () => {
  return (
    <div className="product-area section">
      <div className="container mx-auto px-8">
        <div className="section-padding-t">
          <div className="grid grid-cols-12 items-center">
            <div className="md:col-span-4 col-span-12">
              <div className="product-section-top-left">
                <button
                  //   onClick={toggleDrawer}
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
                  <a href="#" className="view-btn list-view">
                    <img
                      className="view-icon"
                      src="http://zairito-html.zainiktheme.com/demo/assets/images/view-list.svg"
                      alt="view-list"
                    />
                  </a>
                  <a href="#" className="view-btn grid-view active">
                    <img
                      className="view-icon"
                      src="http://zairito-html.zainiktheme.com/demo/assets/images/view-grid.svg"
                      alt="view-grid"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 col-span-12">
              <div className="product-filter flex justify-end">
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

        <div className="grid grid-cols-12">
          <Products02 />
        </div>

        <div className="product-list">
          <div className="pagination-area mt-30">
            <ul className="paginations text-center">
              <li className="pagination-page">
                <a href="#" className="pagination-link">
                  <i className="fas fa-angle-double-left"></i>
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
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductArea02;
