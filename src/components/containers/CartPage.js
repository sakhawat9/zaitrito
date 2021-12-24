import React from "react";
import { AiFillStar, AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

const CartPage = () => {
  return (
    <div className="wish-list-area cart-page-area section-padding">
      <div className="container mx-auto px-8">
        <div className="grid gap-4 grid-cols-12">
          <div className="col-span-12 wish-list-table">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="cart-page-item">
                    <td>
                      <div className="single-grid-product m-0">
                        <div className="product-top">
                          <a href="single-product.html">
                            <img
                              className="product-thumbnal"
                              src="http://zairito-html.zainiktheme.com/demo/assets/images/product-image-2.png"
                              alt="cart"
                            />
                          </a>
                          <div className="product-flags">
                            <span className="product-flag sale">SALE</span>
                            <span className="product-flag discount">-15%</span>
                          </div>
                        </div>
                        <div className="product-info text-center">
                          <h4 className="product-catagory">ELLA - HALOTHEMES</h4>
                          <h3 className="product-name">
                            <a className="product-link" href="single-product.html">
                              Premier Cropped Jean
                            </a>
                          </h3>
                          <ul className="product-review flex">
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
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-price text-center">
                        <h4 className="regular-price">$220.88</h4>
                        <h3 className="price">$278.58</h3>
                      </div>
                    </td>
                    <td>
                      <div className="cart-quantity input-group">
                        <div><AiOutlineMinus /></div>
                        <input
                          className="qty-input cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          value="1"
                          readonly=""
                        />
                        <div><IoMdAdd /></div>
                      </div>
                    </td>
                    <td>
                      <h1 className="cart-table-item-total">$278.58</h1>
                    </td>
                    <td>
                      <button className="delet-btn" title="Delete Item">
                        <img
                          src="http://zairito-html.zainiktheme.com/demo/assets/images/close.svg"
                          alt="close"
                        />
                      </button>
                    </td>
                  </tr>

                  <tr className="cart-page-item">
                    <td>
                      <div className="single-grid-product m-0">
                        <div className="product-top">
                          <a href="single-product.html">
                            <img
                              className="product-thumbnal"
                              src="http://zairito-html.zainiktheme.com/demo/assets/images/product-image-6.png"
                              alt="cart"
                            />
                          </a>
                          <div className="product-flags">
                            <span className="product-flag sale">SALE</span>
                            <span className="product-flag discount">-15%</span>
                          </div>
                        </div>
                        <div className="product-info text-center">
                          <h4 className="product-catagory">ELLA - HALOTHEMES</h4>
                          <h3 className="product-name">
                            <a className="product-link" href="single-product.html">
                              Tailored Fit Mesh-Panel Polo
                            </a>
                          </h3>
                          <ul className="product-review flex">
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
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-price text-center">
                        <h4 className="regular-price">$120.88</h4>
                        <h3 className="price">$108.58</h3>
                      </div>
                    </td>
                    <td>
                      <div className="cart-quantity input-group">
                        <div><AiOutlineMinus /></div>
                        <input
                          className="qty-input cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          value="1"
                          readonly=""
                        />
                        <div><IoMdAdd /></div>
                      </div>
                    </td>
                    <td>
                      <h1 className="cart-table-item-total">$108.58</h1>
                    </td>
                    <td>
                      <button className="delet-btn" title="Delete Item">
                        <img
                          src="http://zairito-html.zainiktheme.com/demo/assets/images/close.svg"
                          alt="close"
                        />
                      </button>
                    </td>
                  </tr>

                  <tr className="cart-page-item">
                    <td>
                      <div className="single-grid-product m-0">
                        <div className="product-top">
                          <a href="single-product.html">
                            <img
                              className="product-thumbnal"
                              src="http://zairito-html.zainiktheme.com/demo/assets/images/product-image-1.png"
                              alt="cart"
                            />
                          </a>
                          <div className="product-flags">
                            <span className="product-flag sale">SALE</span>
                            <span className="product-flag discount">-15%</span>
                          </div>
                        </div>
                        <div className="product-info text-center">
                          <h4 className="product-catagory">ELLA - HALOTHEMES</h4>
                          <h3 className="product-name">
                            <a className="product-link" href="single-product.html">
                              Rosmo Namino Milancelos
                            </a>
                          </h3>
                          <ul className="product-review flex">
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
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-price text-center">
                        <h4 className="regular-price">$100.88</h4>
                        <h3 className="price">$90.58</h3>
                      </div>
                    </td>
                    <td>
                      <div className="cart-quantity input-group">
                        <div><AiOutlineMinus /></div>
                        <input
                          className="qty-input cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          value="1"
                          readonly=""
                        />
                        <div><IoMdAdd /></div>
                      </div>
                    </td>
                    <td>
                      <h1 className="cart-table-item-total">$90.58</h1>
                    </td>
                    <td>
                      <button className="delet-btn" title="Delete Item">
                        <img
                          src="http://zairito-html.zainiktheme.com/demo/assets/images/close.svg"
                          alt="close"
                        />
                      </button>
                    </td>
                  </tr>

                  <tr className="cart-page-item">
                    <td>
                      <div className="single-grid-product m-0">
                        <div className="product-top">
                          <a href="single-product.html">
                            <img
                              className="product-thumbnal"
                              src="http://zairito-html.zainiktheme.com/demo/assets/images/product-image-5.png"
                              alt="cart"
                            />
                          </a>
                          <div className="product-flags">
                            <span className="product-flag sale">SALE</span>
                            <span className="product-flag discount">-15%</span>
                          </div>
                        </div>
                        <div className="product-info text-center">
                          <h4 className="product-catagory">ELLA - HALOTHEMES</h4>
                          <h3 className="product-name">
                            <a className="product-link" href="single-product.html">
                              Premier Cropped Jean
                            </a>
                          </h3>
                          <ul className="product-review flex">
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
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-price text-center">
                        <h4 className="regular-price">$220.88</h4>
                        <h3 className="price">$278.58</h3>
                      </div>
                    </td>
                    <td>
                      <div className="cart-quantity input-group">
                        <div><AiOutlineMinus /></div>
                        <input
                          className="qty-input cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          value="1"
                          readonly=""
                        />
                        <div><IoMdAdd /></div>
                      </div>
                    </td>
                    <td>
                      <h1 className="cart-table-item-total">$278.58</h1>
                    </td>
                    <td>
                      <button className="delet-btn" title="Delete Item">
                        <img
                          src="http://zairito-html.zainiktheme.com/demo/assets/images/close.svg"
                          alt="close"
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-12 cart-page-bottom-box-wrap">
          <div className="col-12 col-span-12 md:col-span-12 lg:col-span-4">
            <div className="cart-page-bottom-box">
              <h2 className="bottom-box-title">Discount Codes</h2>

              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="coupon_code"
                    placeholder="Enter your coupon code"
                  />
                </div>

                <div className="form-button text-center">
                  <button type="button" className="form-btn">
                    Apply Cupon
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-span-12 md:col-span-12 lg:col-span-4">
            <div className="cart-page-bottom-box">
              <h2 className="bottom-box-title">Shipping</h2>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="coupon_code"
                    placeholder="Enter your country"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="coupon_code"
                    placeholder="Enter your city"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="coupon_code"
                    placeholder="Enter your zip code"
                  />
                </div>

                <div className="form-button text-center">
                  <button type="button" className="form-btn">
                    Apply Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-span-12 md:col-span-12 lg:col-span-4">
            <div className="cart-page-bottom-box cart-page-sub-total-box">
              <div className="sub-total-inner-box d-flex justify-content-between align-items-center">
                <h2 className="bottom-box-title m-0">Subtotal :</h2>
                <h2 className="bottom-box-title m-0">$542.00</h2>
              </div>

              <div className="sub-total-inner-box d-flex justify-content-between align-items-center">
                <div className="cart-inner-shipping-title">
                  <span>Shipping</span>
                  <p className="shipping-state m-0">Shipping to United States</p>
                </div>
                <h2 className="bottom-box-title m-0">$25.00</h2>
              </div>

              <div className="sub-total-inner-box d-flex justify-content-between align-items-center">
                <h2 className="bottom-box-title m-0">Total</h2>
                <h2 className="bottom-box-title cart-page-final-total m-0">
                  $567.00
                </h2>
              </div>

              <div className="form-button text-center">
                <a
                  href="checkout.html"
                  className="form-btn proceed-to-checkout-btn"
                >
                  Proceed To Cheeckout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
