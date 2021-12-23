import React from "react";

const CheckoutPage = () => {
  return (
    <section className="page-content section-padding">
      <div className="checkout">
        <div className="container mx-auto px-8">
          <div className="grid gap-4 grid-cols-12">
            <div className="lg:col-span-6 md:col-span-6">
              <div className="checkout-form">
                <form>
                  <div className="grid gap-4 grid-cols-12">
                    <div className="lg:col-span-12">
                      <h2 className="checkout-title">Billing Address</h2>
                    </div>
                    <div className="lg:col-span-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="You Name Here"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="street-address"
                          name="street-address"
                          placeholder="Street Address"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          name="state"
                          placeholder="State"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="zipcode"
                          name="zipcode"
                          placeholder="Zip/Postal Code"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-12">
                      <select className="form-select w-full" id="country">
                        <option>Country</option>
                        <option>us</option>
                        <option>uk</option>
                        <option>india</option>
                        <option>bangladesh</option>
                      </select>
                    </div>
                  </div>
                  <div className="payment-method">
                    <div className="grid gap-4 grid-cols-12">
                      <div className="lg:col-span-12">
                        <h2 className="checkout-title">Payment Method</h2>
                      </div>
                      <div className="lg:col-span-12">
                        <div className="form-group">
                          <div className="form-check card-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="card"
                              id="creditcard"
                              value="creditcard"
                              checked="checked"
                            />
                            <label className="form-check-label" for="creditcard">
                              Credit Card
                            </label>
                            <div className="input-icon">
                              <img
                                src="http://zairito-html.zainiktheme.com/demo/assets/images/payment-method.png"
                                alt="payment-method"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="card-infor-box">
                          <div className="grid  gap-4 grid-cols-12">
                            <div className="lg:col-span-12">
                              <div className="form-group">
                                <label for="card-humber">Card Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="card-humber"
                                  name="card-humber"
                                  placeholder="0000 0000 0000 0000 "
                                />
                                <div className="input-icon">
                                  <img
                                    src="http://zairito-html.zainiktheme.com/demo/assets/images/card-image.png"
                                    alt="payment-method"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="lg:col-span-8">
                              <div className="grid gap-4 grid-cols-12">
                                <div className="lg:col-span-12">
                                  <label>Expire Date</label>
                                </div>
                                <div className="lg:col-span-6">
                                  <select className="form-select" id="Month">
                                    <option>Month</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                  </select>
                                </div>
                                <div className="lg:col-span-6">
                                  <select className="form-select" id="Year">
                                    <option>Year</option>
                                    <option>2020</option>
                                    <option>2019</option>
                                    <option>2018</option>
                                    <option>2017</option>
                                    <option>2016</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="lg:col-span-4">
                              <div className="form-group">
                                <label for="ccv">ccv</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="ccv"
                                  name="ccv"
                                  placeholder="Three Digit "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-check card-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="card"
                              id="paypal"
                              value="paypal"
                            />
                            <label className="form-check-label" for="paypal">
                              Paypal
                            </label>
                            <div className="input-icon">
                              <img
                                src="http://zairito-html.zainiktheme.com/demo/assets/images/paypal.png"
                                alt="paypal"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group form-check terms-agree">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="agree"
                          />
                          <label className="form-check-label" for="agree">
                            By clicking the button you agree to our{" "}
                            <a href="term-conditions.html">
                              Terms &amp; Conditions
                            </a>
                          </label>
                        </div>
                        <button type="button" className="checkout-btn form-btn">
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:col-span-6 md:col-span-6">
              <div className="cart-summary">
                <div className="summary-top flex">
                  <h2>Cart Summary</h2>
                  <a className="edite-btn" href="cart.html">
                    Edit
                  </a>
                </div>
                <ul className="cart-product-list">
                  <li className="single-cart-product flex justify-between">
                    <div className="product-info">
                      <h3>2 x Rosmo Namino Milancelos</h3>
                      <p>Size: XL, Color: Blue</p>
                      <p>P. Code: SF5FS4F54FD</p>
                    </div>
                    <div className="price-area">
                      <h3 className="price">$50.60</h3>
                    </div>
                  </li>
                  <li className="single-cart-product flex justify-between">
                    <div className="product-info">
                      <h3>2 x Tailored Fit Mesh-Panel Polo</h3>
                      <p>Size: XL, Color: Blue</p>
                      <p>P. Code: SF5FS4F54FD</p>
                    </div>
                    <div className="price-area">
                      <h3 className="price">$50.60</h3>
                    </div>
                  </li>
                  <li className="single-cart-product flex justify-between">
                    <div className="product-info">
                      <h3>2 x Rosmo Namino Milancelos</h3>
                      <p>Size: XL, Color: Blue</p>
                      <p>P. Code: SF5FS4F54FD</p>
                    </div>
                    <div className="price-area">
                      <h3 className="price">$50.60</h3>
                    </div>
                  </li>
                </ul>
                <ul className="summary-list">
                  <li>
                    Subtotal <span>$500.50</span>
                  </li>
                  <li>
                    Shipping Cost <span>$15.50</span>
                  </li>
                  <li>
                    VAT/Tax 15% <span>$20.00</span>
                  </li>
                </ul>
                <div className="total-amount">
                  <h3>
                    Total Cost <span className="float-right">$20.00</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
