import React from "react";

const CartPage = () => {
  return (
    <div class="wish-list-area cart-page-area section-padding">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-12">
          <div class="col-span-12 wish-list-table">
            <div class="table-responsive">
              <table class="table table-bordered">
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
                  <tr class="cart-page-item">
                    <td>
                      <div class="single-grid-product m-0">
                        <div class="product-top">
                          <a href="single-product.html">
                            <img
                              class="product-thumbnal"
                              src="http://zairito-html.zainiktheme.com/demo/assets/images/product-image-2.png"
                              alt="cart"
                            />
                          </a>
                          <div class="product-flags">
                            <span class="product-flag sale">SALE</span>
                            <span class="product-flag discount">-15%</span>
                          </div>
                        </div>
                        <div class="product-info text-center">
                          <h4 class="product-catagory">ELLA - HALOTHEMES</h4>
                          <h3 class="product-name">
                            <a class="product-link" href="single-product.html">
                              Premier Cropped Jean
                            </a>
                          </h3>
                          <ul class="product-review">
                            <li class="review-item active">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item active">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item active">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item">
                              <i class="flaticon-star"></i>
                            </li>
                          </ul>
                          <div class="variable-single-item color-switch">
                            <div class="product-variable-color">
                              <label>
                                <input
                                  name="modal-product-color"
                                  class="color-select"
                                  type="radio"
                                  checked=""
                                />
                                <span class="product-color-black"></span>
                              </label>
                              <label>
                                <input
                                  name="modal-product-color"
                                  class="color-select"
                                  type="radio"
                                />
                                <span class="product-color-tomato"></span>
                              </label>

                              <label>
                                <input
                                  name="modal-product-color"
                                  class="color-select"
                                  type="radio"
                                />
                                <span class="product-color-gray"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="product-price text-center">
                        <h4 class="regular-price">$220.88</h4>
                        <h3 class="price">$278.58</h3>
                      </div>
                    </td>
                    <td>
                      <div class="cart-quantity input-group">
                        <div class="increase-btn dec qtybutton btn">-</div>
                        <input
                          class="qty-input cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          value="1"
                          readonly=""
                        />
                        <div class="increase-btn inc qtybutton btn">+</div>
                      </div>
                    </td>
                    <td>
                      <h1 class="cart-table-item-total">$278.58</h1>
                    </td>
                    <td>
                      <button class="delet-btn" title="Delete Item">
                        <img
                          src="http://zairito-html.zainiktheme.com/demo/assets/images/close.svg"
                          alt="close"
                        />
                      </button>
                    </td>
                  </tr>

                  <tr class="cart-page-item">
                    <td>
                      <div class="single-grid-product m-0">
                        <div class="product-top">
                          <a href="single-product.html">
                            <img
                              class="product-thumbnal"
                              src="http://zairito-html.zainiktheme.com/demo/assets/images/product-image-6.png"
                              alt="cart"
                            />
                          </a>
                          <div class="product-flags">
                            <span class="product-flag sale">SALE</span>
                            <span class="product-flag discount">-15%</span>
                          </div>
                        </div>
                        <div class="product-info text-center">
                          <h4 class="product-catagory">ELLA - HALOTHEMES</h4>
                          <h3 class="product-name">
                            <a class="product-link" href="single-product.html">
                              Tailored Fit Mesh-Panel Polo
                            </a>
                          </h3>
                          <ul class="product-review">
                            <li class="review-item active">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item active">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item active">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item">
                              <i class="flaticon-star"></i>
                            </li>
                          </ul>
                          <div class="variable-single-item color-switch">
                            <div class="product-variable-color">
                              <label>
                                <input
                                  name="modal-product-color"
                                  class="color-select"
                                  type="radio"
                                  checked=""
                                />
                                <span class="product-color-black"></span>
                              </label>
                              <label>
                                <input
                                  name="modal-product-color"
                                  class="color-select"
                                  type="radio"
                                />
                                <span class="product-color-tomato"></span>
                              </label>

                              <label>
                                <input
                                  name="modal-product-color"
                                  class="color-select"
                                  type="radio"
                                />
                                <span class="product-color-gray"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="product-price text-center">
                        <h4 class="regular-price">$120.88</h4>
                        <h3 class="price">$108.58</h3>
                      </div>
                    </td>
                    <td>
                      <div class="cart-quantity input-group">
                        <div class="increase-btn dec qtybutton btn">-</div>
                        <input
                          class="qty-input cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          value="1"
                          readonly=""
                        />
                        <div class="increase-btn inc qtybutton btn">+</div>
                      </div>
                    </td>
                    <td>
                      <h1 class="cart-table-item-total">$108.58</h1>
                    </td>
                    <td>
                      <button class="delet-btn" title="Delete Item">
                        <img
                          src="http://zairito-html.zainiktheme.com/demo/assets/images/close.svg"
                          alt="close"
                        />
                      </button>
                    </td>
                  </tr>

                  <tr class="cart-page-item">
                    <td>
                      <div class="single-grid-product m-0">
                        <div class="product-top">
                          <a href="single-product.html">
                            <img
                              class="product-thumbnal"
                              src="http://zairito-html.zainiktheme.com/demo/assets/images/product-image-1.png"
                              alt="cart"
                            />
                          </a>
                          <div class="product-flags">
                            <span class="product-flag sale">SALE</span>
                            <span class="product-flag discount">-15%</span>
                          </div>
                        </div>
                        <div class="product-info text-center">
                          <h4 class="product-catagory">ELLA - HALOTHEMES</h4>
                          <h3 class="product-name">
                            <a class="product-link" href="single-product.html">
                              Rosmo Namino Milancelos
                            </a>
                          </h3>
                          <ul class="product-review">
                            <li class="review-item active">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item active">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item active">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item">
                              <i class="flaticon-star"></i>
                            </li>
                          </ul>
                          <div class="variable-single-item color-switch">
                            <div class="product-variable-color">
                              <label>
                                <input
                                  name="modal-product-color"
                                  class="color-select"
                                  type="radio"
                                  checked=""
                                />
                                <span class="product-color-black"></span>
                              </label>
                              <label>
                                <input
                                  name="modal-product-color"
                                  class="color-select"
                                  type="radio"
                                />
                                <span class="product-color-tomato"></span>
                              </label>

                              <label>
                                <input
                                  name="modal-product-color"
                                  class="color-select"
                                  type="radio"
                                />
                                <span class="product-color-gray"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="product-price text-center">
                        <h4 class="regular-price">$100.88</h4>
                        <h3 class="price">$90.58</h3>
                      </div>
                    </td>
                    <td>
                      <div class="cart-quantity input-group">
                        <div class="increase-btn dec qtybutton btn">-</div>
                        <input
                          class="qty-input cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          value="1"
                          readonly=""
                        />
                        <div class="increase-btn inc qtybutton btn">+</div>
                      </div>
                    </td>
                    <td>
                      <h1 class="cart-table-item-total">$90.58</h1>
                    </td>
                    <td>
                      <button class="delet-btn" title="Delete Item">
                        <img
                          src="http://zairito-html.zainiktheme.com/demo/assets/images/close.svg"
                          alt="close"
                        />
                      </button>
                    </td>
                  </tr>

                  <tr class="cart-page-item">
                    <td>
                      <div class="single-grid-product m-0">
                        <div class="product-top">
                          <a href="single-product.html">
                            <img
                              class="product-thumbnal"
                              src="http://zairito-html.zainiktheme.com/demo/assets/images/product-image-5.png"
                              alt="cart"
                            />
                          </a>
                          <div class="product-flags">
                            <span class="product-flag sale">SALE</span>
                            <span class="product-flag discount">-15%</span>
                          </div>
                        </div>
                        <div class="product-info text-center">
                          <h4 class="product-catagory">ELLA - HALOTHEMES</h4>
                          <h3 class="product-name">
                            <a class="product-link" href="single-product.html">
                              Premier Cropped Jean
                            </a>
                          </h3>
                          <ul class="product-review">
                            <li class="review-item active">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item active">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item active">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item">
                              <i class="flaticon-star"></i>
                            </li>
                            <li class="review-item">
                              <i class="flaticon-star"></i>
                            </li>
                          </ul>
                          <div class="variable-single-item color-switch">
                            <div class="product-variable-color">
                              <label>
                                <input
                                  name="modal-product-color"
                                  class="color-select"
                                  type="radio"
                                  checked=""
                                />
                                <span class="product-color-black"></span>
                              </label>
                              <label>
                                <input
                                  name="modal-product-color"
                                  class="color-select"
                                  type="radio"
                                />
                                <span class="product-color-tomato"></span>
                              </label>

                              <label>
                                <input
                                  name="modal-product-color"
                                  class="color-select"
                                  type="radio"
                                />
                                <span class="product-color-gray"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="product-price text-center">
                        <h4 class="regular-price">$220.88</h4>
                        <h3 class="price">$278.58</h3>
                      </div>
                    </td>
                    <td>
                      <div class="cart-quantity input-group">
                        <div class="increase-btn dec qtybutton btn">-</div>
                        <input
                          class="qty-input cart-plus-minus-box"
                          type="text"
                          name="qtybutton"
                          value="1"
                          readonly=""
                        />
                        <div class="increase-btn inc qtybutton btn">+</div>
                      </div>
                    </td>
                    <td>
                      <h1 class="cart-table-item-total">$278.58</h1>
                    </td>
                    <td>
                      <button class="delet-btn" title="Delete Item">
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

        <div class="grid grid-cols-12 cart-page-bottom-box-wrap">
          <div class="col-12 col-span-12 md:col-span-12 lg:col-span-4">
            <div class="cart-page-bottom-box">
              <h2 class="bottom-box-title">Discount Codes</h2>

              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="coupon_code"
                    placeholder="Enter your coupon code"
                  />
                </div>

                <div class="form-button text-center">
                  <button type="button" class="form-btn">
                    Apply Cupon
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-12 col-span-12 md:col-span-12 lg:col-span-4">
            <div class="cart-page-bottom-box">
              <h2 class="bottom-box-title">Shipping</h2>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="coupon_code"
                    placeholder="Enter your country"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="coupon_code"
                    placeholder="Enter your city"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="coupon_code"
                    placeholder="Enter your zip code"
                  />
                </div>

                <div class="form-button text-center">
                  <button type="button" class="form-btn">
                    Apply Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-12 col-span-12 md:col-span-12 lg:col-span-4">
            <div class="cart-page-bottom-box cart-page-sub-total-box">
              <div class="sub-total-inner-box d-flex justify-content-between align-items-center">
                <h2 class="bottom-box-title m-0">Subtotal :</h2>
                <h2 class="bottom-box-title m-0">$542.00</h2>
              </div>

              <div class="sub-total-inner-box d-flex justify-content-between align-items-center">
                <div class="cart-inner-shipping-title">
                  <span>Shipping</span>
                  <p class="shipping-state m-0">Shipping to United States</p>
                </div>
                <h2 class="bottom-box-title m-0">$25.00</h2>
              </div>

              <div class="sub-total-inner-box d-flex justify-content-between align-items-center">
                <h2 class="bottom-box-title m-0">Total</h2>
                <h2 class="bottom-box-title cart-page-final-total m-0">
                  $567.00
                </h2>
              </div>

              <div class="form-button text-center">
                <a
                  href="checkout.html"
                  class="form-btn proceed-to-checkout-btn"
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
